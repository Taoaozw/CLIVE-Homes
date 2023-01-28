import { useEffect, useRef, useState } from 'react'
import FOG from 'vanta/dist/vanta.fog.min'
import github from '@/assets/github.svg'

function Blogs() {
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
            <div className='w-full h-full' ref={homeRef}>
                <div
                    className='flex flex-row justify-between font-inter text-2xl text-amber-50  text-center py-5  font-sans font-bold '>
                    <div className='flex justify-center content-center hover:text-underline-offset-1'>
                        <img src={github} className='h-8 mx-3 ' alt='github' /> <a href='https://github.com/Taoaozw'
                                                                                   className='hover:text-emerald-200'>GitHub</a>
                    </div>
                    <div className='flex flex-row space-x-32 max-sm:space-x-8'>
                        <div className='hover:text-emerald-200 '>Blogs</div>
                        <div className='hover:text-emerald-200 '>Topics</div>
                        <div className='hover:text-emerald-200 '>Search</div>
                    </div>
                    <div className='mr-3 hover:text-emerald-200'>Contact</div>
                </div>
                <div className='text-amber-50 text-6xl font-inter text-center mt-10'>
                    Recent Posts
                </div>
                <div className='content'>

                </div>
            </div>
        </>
    )
}

export default Blogs
