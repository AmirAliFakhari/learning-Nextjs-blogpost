
import FeaturedPost from "../components/home-page/featured-post"
import Hero from "../components/home-page/hero"
import Layout from "../components/layout/layout"
import { getFeaturedPosts } from "../utils/post-util"



export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            posts: featuredPosts
        }
    }

}


function HomePage(props) {
    return (
        <Layout>
            <Hero />
            <FeaturedPost posts={props.posts} />
        </Layout>
    )
}




export default HomePage