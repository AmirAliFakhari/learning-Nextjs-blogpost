import fs from "fs"
import matter from "gray-matter"
import path from "path"

const postsDirectory = path.join(process.cwd(), 'posts')


function getPostDate(fileName) {
    const filePath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)

    const postSlug = fileName.replace(/\.md$/, '')

    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData
}

export function getAllPosts() {
    const postFiles = fs.readFileSync(postsDirectory)

    const allPosts = postFiles.map(postFile => {
        return getPostDate(postFile)
    })

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
    return sortedPosts
}


export function getFeaturedPosts() {
    const allPosts = getAllPosts()

    const featuredPost = allPosts.filter(post => post.isFeatured)

    return featuredPost
}