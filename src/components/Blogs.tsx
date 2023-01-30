import React, { useState } from 'react'
import Card from '@/components/Card'
import useLoadMoreList from 'use-load-more-list'
import { InfiniteScroll } from 'antd-mobile'
import Background from '@/components/Background'

function Blogs() {
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
            <Background>
                <div className='text-amber-50 text-6xl font-inter text-center mt-10 h-32'>
                    Recent Posts
                </div>
                <div className='content  grow  pt-10 pl-72 pr-72'>
                    <div className=' grid grid-cols-auto gap-x-4'>
                        <Card pd={data?.map(o => o.id)} />
                    </div>
                </div>
                <InfiniteScroll loadMore={handleLoad} hasMore={hasMore} />
            </Background>
        </>
    )
}

export default Blogs
