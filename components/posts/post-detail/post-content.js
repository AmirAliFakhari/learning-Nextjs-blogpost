import React from 'react'
import PostHeader from './post-header'
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown"

const DUMMY_POST = {
    title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs1', content: "# This is a first post"
}

function PostContent({ post }) {
    const imagePath = `/image/post/${post.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent