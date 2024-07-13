import React from 'react';
import PostsItem from './posts-item';
import classes from './post-grid.module.css';

function PostsGrid({ posts }) {
    console.log(posts);
    return (
        <ul className={classes.grid}>
            {posts.map(post => (
                <PostsItem key={post.slug} post={post} />
            ))}
        </ul>
    );
}

export default PostsGrid;
