import { useEffect, useRef, useState } from 'react'
import FOG from 'vanta/dist/vanta.fog.min'
import github from '@/assets/github.svg'
import playground from 'kotlin-playground'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import ReactMarkdown from 'react-markdown'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import { content } from '@/model/blogs'

export default function Blog() {
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

    useEffect(() => {
        playground('.language-kotlin')
    })
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
                <div
                    className='mt-12 text-amber-50 font-sans text-4xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[rgba(208,244,218,1)] to-[rgba(37,219,164,1)]'>
                    The Ultimate Guide to Bookstagram for Beginners
                </div>
                <div className='flex justify-center content-center'>
                    <div className={'mt-10 text-amber-50 font-sans text-xl '}>
                        <article className='prose'>
                            <ReactMarkdown
                                children={content}
                                remarkPlugins={[[remarkGfm]]}
                                components={{
                                    code({ node, inline, className, children, ...props }) {
                                        console.log(typeof props)
                                        const match = /language-(\w+)/.exec(className || '')
                                        let mr
                                        if (!match) {
                                            mr = false
                                        } else {
                                            mr = 'kotlin' != match[1]
                                        }
                                        return !inline && match && mr ? (
                                            <SyntaxHighlighter
                                                className={'HCode'}
                                                children={String(children).replace(/\n$/, '')}
                                                // @ts-ignore
                                                style={dracula}
                                                language={match[1]}
                                                PreTag='div'
                                                showLineNumbers={true}
                                                {...props}
                                            />
                                        ) : (
                                            // @ts-ignore
                                            <code className={className} {...props} theme='darcula'>
                                                {children}
                                            </code>
                                        )
                                    }
                                }}
                            />
                        </article>
                    </div>
                </div>

            </div>
        </>
    )

}
