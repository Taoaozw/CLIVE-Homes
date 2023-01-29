export interface BlogsData {
    pd?: number[]
}

export default function Card(bd: BlogsData) {
    return <>
        {bd.pd?.map(i =>
            <div
                className='w-72 h-80 bg-amber-50 bg-opacity-20 border border-solid border-clive rounded-2xl flex flex-col justify-start box-border mb-12 mr-6 grow '
                key={i}>
                <div className='my-6 mx-8 h-full flex flex-col space-y-4'>
                    <a
                        className='font-sans text-transparent font-medium text-xl bg-clip-text bg-gradient-to-b from-[rgba(208,244,218,1)] to-[rgba(37,219,164,1)] hover:text-2xl'>
                        The Ultimate Guide to Bookstagram for Beginners
                    </a>
                    <div className='font-inter text-amber-50 text-sm'>
                        October 24.2020
                    </div>
                    <div className='flex flex-row justify-start space-x-2'>
                        <div className='Flag1 rounded'>
                            <div className='text-amber-50 font-sans text-xs px-2 py-1 '>Kotlin</div>
                        </div>
                        <div className='Flag2 rounded'>
                            <div className='text-amber-50 font-sans text-xs px-2 py-1 '>Shell</div>
                        </div>
                        <div className='Flag3 rounded'>
                            <div className='text-amber-50 font-sans text-xs px-2 py-1 '>Linux</div>
                        </div>
                    </div>
                    <div
                        className=' font-sans text-amber-50 font-[400] text-sm  text-ellipsis grow'>
                        <div className='line-clamp-4 mt-2'>
                            TestQuality is the #1 Test Case Creation and Management app for GitHub Workflows.
                            TestQuality extends your Github DevOps workflow to provide powerful and modern GitHub
                            issue powered test case creation and management. TestQuality integrates with GitHub,
                            Jira, Selenium, Jenkins, Cloudbees, Cucumber, JUnit and more to complement your entire
                            DevOps workflow. TestQuality is FREE for GitHub public repo’s and affordable for teams
                            on private repo's.
                        </div>
                    </div>
                </div>
            </div>
        )}

    </>


}
