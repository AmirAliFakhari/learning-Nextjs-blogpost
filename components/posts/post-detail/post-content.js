import React from 'react'
import PostHeader from './post-header'
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown"
import Image from 'next/image'
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'



function PostContent({ post }) {
    const imagePath = `/image/post/${post.image}`

    const customRenderers = {
        paragraph({ node, ...props }) {

            if (node.children[0].type === "image") {
                const image = node.children[0]

                return <div className={classes.image}>
                    <Image width={600} alt={image.alt} height={300} src={`/image/post/${image.url}`} />
                </div>
            }
            return <p>{props.children}</p>
        },
        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1];
            return <Prism language={language} children={children} style={atomDark} />

        }
    }

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent