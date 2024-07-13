import { getAllPosts } from "../../lib/post-util"
import AllPosts from "./all-posts"



export function getStaticProps() {
    const allPosts = getAllPosts()

    return {
        props: {
            posts: allPosts
        }
    }
}

function AllPostPage(props) {
    return (
        <AllPosts posts={props.posts} />
    )
}
export default AllPostPage