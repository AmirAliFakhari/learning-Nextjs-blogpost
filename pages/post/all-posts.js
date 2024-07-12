



function AllPosts({ posts }) {
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostGrid props={posts} />
        </section>
    )
}

export default AllPosts 