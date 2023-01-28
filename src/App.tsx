import './App.css'
import { useEffect, useRef, useState } from 'react'
import FOG from 'vanta/dist/vanta.fog.min'
import github from '@/assets/github.svg'

function App() {
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
        <div className='w-full h-full flex flex-col content-between ' ref={homeRef}>
            <div
                className='flex flex-row justify-between font-inter text-base text-amber-50  text-center py-5  font-sans font-bold '>
                <div className='flex justify-center content-center hover:text-underline-offset-1'>
                    <img src={github} className='h-6 mx-3 ' alt='github' /> <a href='https://github.com/Taoaozw'
                                                                               className='hover:text-emerald-200'>GitHub</a>
                </div>
                <div className='flex flex-row space-x-32 max-sm:space-x-8'>
                    <div className='hover:text-emerald-200 '>Home</div>
                    <div className='hover:text-emerald-200 '>Blogs</div>
                    <div className='hover:text-emerald-200 '>Topics</div>
                </div>
                <div className='mr-3 hover:text-emerald-200'>Contact</div>
            </div>
            <div
                className='grow flex flex-col flex-wrap justify-center content-start max-sm:content-center ml-20 max-sm:ml-0 max-sm:text-center'>
                <p className='text-7xl max-sm:text-4xl font-sans text-amber-50 mb-6  font-normal'>CLIVE'S HOME</p>
                <div className='text-3xl max-sm:text-2xl font-sans text-amber-50 font-light'>
                    Have the ability to love oneself, have the strength to love others.
                </div>
            </div>
        </div>
    )
    // return (
    //     <div className="App bg-amber-200 text-9xl">
    //         <div className="text-amber-50">11</div>
    //         <div>Hello world</div>
    //         <div className="font-inter">This is a good idea !</div>
    //         <div>14</div>
    //     </div>
    // )
}

export default App
