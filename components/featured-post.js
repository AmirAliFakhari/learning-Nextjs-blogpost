import React from 'react'
import classes from "./featured.module.css"
import PostGrid from './post/post-grid'
function FeaturedPost({ posts }) {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostGrid props={posts} />
        </section>
    )
}

export default FeaturedPost