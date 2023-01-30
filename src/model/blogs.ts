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


export const content = `
## 这是你好的啊222
# dd
## 这是你好的啊123
### 3jimul  
   
 A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.\n
> 你好啊

* Lists
* [ ] todo
* [x] done

1133
A table:

| a | b |
| - | - |
| 1 | 2 |
\`\`\`javascript 
    const x = 12
\`\`\`    

\`\`\`kotlin
    fun main() {
        println("Hello World")
    }
\`\`\` 
`
