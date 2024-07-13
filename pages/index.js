
import FeaturedPost from "../components/home-page/featured-post"
import Hero from "../components/home-page/hero"
import Layout from "../components/layout/layout"
import { getFeaturedPosts } from "../lib/post-util"


const DUMMMY_POSTS = [
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs1' },
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs2' },
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs3' },
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs4' },
]

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