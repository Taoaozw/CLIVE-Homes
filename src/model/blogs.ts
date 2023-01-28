export interface Blog {

    name: string

    timeStamps: string

    flags: string[]

    content: string

}


export type Blogs = Blog[]

export const mockBlogs: Blogs = new Array(10).fill(
    {
        name: 'blog1',
        timeStamps: '2020-01-01',
        flags: ['flag1', 'flag2'],
        content: 'content1'
    }
)

