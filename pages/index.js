
import FeaturedPost from "../components/home-page/featured-post"
import Hero from "../components/home-page/hero"
import Layout from "../components/layout/layout"


const DUMMMY_POSTS = [
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs1' },
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs2' },
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs3' },
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs4' },
]


function HomePage() {
    return (
        <Layout>
            <Hero />
            <FeaturedPost posts={DUMMMY_POSTS} />
        </Layout>
    )
}

export default HomePage