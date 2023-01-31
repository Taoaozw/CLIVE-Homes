import React, { useEffect, useRef, useState } from 'react'
import FOG from 'vanta/dist/vanta.fog.min'
import github from '@/assets/github.svg'
import { Link } from 'react-router-dom'

export interface BackgroundContent {
    children: React.ReactNode
}

export default function Background(props: BackgroundContent) {
    const [vantaEffect, setVantaEffect] = useState<any>(null)
    const homeRef = useRef(null)
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

    return (
        <>
            <div className='w-full h-full flex flex-col' ref={homeRef}>
                <div
                    className='flex flex-row justify-between font-inter text-2xl max-sm:text-base text-amber-50  text-center py-5  font-sans font-bold h-20 '>
                    <div className='flex justify-center content-center max-sm:text-base hover:text-underline-offset-1'>
                        <img src={github} className='h-8 mx-3 max-sm:h-6' alt='github' /> <a href='https://github.com/Taoaozw'
                                                                                   className='text-amber-50 hover:text-emerald-200'>GitHub</a>
                    </div>
                    <div className='flex flex-row space-x-32 max-sm:space-x-8 !text-amber-50  '>
                        <div className='hover:text-emerald-200 '><Link to='/' className='text-amber-50'>Home</Link>
                        </div>
                        <div className='hover:text-emerald-200 '><Link to='/blogs'
                                                                       className='text-amber-50'>Blogs</Link></div>
                        <div className='hover:text-emerald-200 '>Topics</div>
                    </div>
                    <div className='mr-3 hover:text-emerald-200 '>Contact</div>
                </div>
                {props.children}
            </div>
        </>
    )
}
