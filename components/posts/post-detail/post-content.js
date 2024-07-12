import React from 'react'
import PostHeader from './post-header'
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown"

const DUMMY_POST = {
    title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs1', content: "# This is a first post"
}

function PostContent() {
    const imagePath = `/image/post/${DUMMY_POST.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>
                {DUMMY_POST.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent