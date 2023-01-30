import './App.css'
import React from 'react'
import Background from '@/components/Background'

function App() {
    return (
        <Background >
             <div
                className='grow flex flex-col flex-wrap justify-center content-start max-sm:content-center ml-20 max-sm:ml-0 max-sm:text-center'>
                <p className='text-7xl max-sm:text-4xl font-sans text-amber-50 mb-6  font-normal'>CLIVE'S HOME</p>
                <div className='text-3xl max-sm:text-2xl font-sans text-amber-50 font-light'>
                    Have the ability to love oneself, have the strength to love others.
                </div>
            </div>
        </Background>
    )
}

export default App
