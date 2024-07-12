import React from 'react'
import classes from "./featured.module.css"
import PostsGrid from '../posts/posts-grid'
function FeaturedPost({ posts }) {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default FeaturedPost