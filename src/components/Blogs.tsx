import React, { useEffect, useRef, useState } from 'react'
import FOG from 'vanta/dist/vanta.fog.min'
import github from '@/assets/github.svg'
import Card from '@/components/Card'
import useLoadMoreList from 'use-load-more-list'
import { InfiniteScroll } from 'antd-mobile'

function Blogs() {
    const [vantaEffect, setVantaEffect] = useState<any>(null)
    const homeRef = useRef(null)
    const [value, setValue] = useState('')

    const {
        data,
        extra,
        total,
        hasMore,
        loading,
        pageNumber,
        run,
        reset,
        deleteDataById,
        getNextPage
    } = useLoadMoreList<{
        id: number
    }>(fetchDemoData, {
        dataKey: 'data', // 后端返回数据的key
        totalKey: 'dataTotal', // 后端返回total字段的key
        idKey: 'id', // 项数据唯一标识的key，没有删除场景的不需要传
        autoRun: true, // 是否自动执行请求
        params: { queryId: value }, // 动态参数
        pageSize: 10
    })

    console.log(data)

    useEffect(() => {
        // call reset only value updated
        // didMount 的时候不执行
        if (homeRef.current) {
            reset()
            return
        }
        // @ts-ignore
        homeRef.current = true
    }, [value])

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                FOG({
                    el: homeRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    highlightColor: 0x15e8aa,
                    midtoneColor: 0xde523d,
                    baseColor: 0x3c2b21,
                    blurFactor: 0.43,
                    speed: 1.4,
                    zoom: 1.4
                })
            )
        }
        return () => {
            if (vantaEffect) {
                vantaEffect.destroy()
            }
        }
    }, [vantaEffect])


    const database = (function() {
        let data = Array(42)
            .fill({})
            .map((_el, index) => ({ id: String(index) }))
        return {
            getData({
                        pageNumber,
                        pageSize,
                        queryId
                    }: {
                pageNumber: number
                pageSize: number
                queryId: string
            }) {
                const filteredData = queryId ? data.filter(({ id }) => id.indexOf(queryId) >= 0) : data
                return {
                    extraName: 'xxx',
                    data: filteredData.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
                    dataTotal: filteredData.length
                }
            },
            deleteById(formId: string) {
                data = data.filter(({ id }) => id !== formId)
            }
        }
    })()

// params 必须要有pageNumber & pageSize，如果后端接口字段不叫这两个，可别名兼容下
    function fetchDemoData(params: { pageNumber: number; pageSize: number; queryId: string }) {
        const { pageNumber, pageSize, queryId } = params
        return new Promise<ReturnType<typeof database.getData>>(resolve => {
            setTimeout(() => {
                resolve(database.getData({ pageNumber, pageSize, queryId }))
            }, 1000)
        })
    }

    const handleLoad = () => {
        if (hasMore) {
            return getNextPage()
                .then(() => {
                })
                .catch(() => {
                })
        } else {
            return Promise.resolve()
        }
    }

    return (
        <>
            <div className='w-full h-full flex flex-col' ref={homeRef}>
                <div
                    className='flex flex-row justify-between font-inter text-2xl text-amber-50  text-center py-5  font-sans font-bold h-20 '>
                    <div className='flex justify-center content-center hover:text-underline-offset-1'>
                        <img src={github} className='h-8 mx-3 ' alt='github' /> <a href='https://github.com/Taoaozw'
                                                                                   className='text-amber-50 hover:text-emerald-200'>GitHub</a>
                    </div>
                    <div className='flex flex-row space-x-32 max-sm:space-x-8'>
                        <div className='hover:text-emerald-200 '>Home</div>
                        <div className='hover:text-emerald-200 '>Blogs</div>
                        <div className='hover:text-emerald-200 '>Topics</div>
                    </div>
                    <div className='mr-3 hover:text-emerald-200'>Contact</div>
                </div>
                <div className='text-amber-50 text-6xl font-inter text-center mt-10 h-32'>
                    Recent Posts
                </div>
                <div className='content  grow  pt-10 pl-72 pr-72'>
                    <div className=' flex flex-row justify-start flex-wrap '>
                        <Card pd={data?.map(o => o.id)} />
                    </div>
                </div>
                <InfiniteScroll loadMore={handleLoad} hasMore={hasMore} />
            </div>
        </>
    )
}

export default Blogs
