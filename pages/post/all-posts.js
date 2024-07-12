

import PostsGrid from "../../components/posts/posts-grid"
import classes from "./all-posts.module.css"

function AllPosts({ posts }) {
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGrid props={posts} />
        </section>
    )
}

export default AllPosts 