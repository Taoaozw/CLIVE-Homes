import { useEffect } from 'react'
import playground from 'kotlin-playground'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import ReactMarkdown from 'react-markdown'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import { content } from '@/model/blogs'
import Background from './Background'

export default function Blog() {
    useEffect(() => {
        playground('.language-kotlin')
    })
    return (
        <>
            <Background >
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
            </Background>
        </>
    )

}
