export interface Blog {

    name: string

    timeStamps: string

    flags: string[]

    content: string

}


export type Blogs = Blog[]




export const content = `
## 这是你好的啊22233
## 2
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
