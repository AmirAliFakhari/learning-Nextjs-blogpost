import AllPosts from "./all-posts"


const DUMMMY_POSTS = [
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs1' },
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs2' },
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs3' },
    { title: 'salam', image: 'amirali.png', excerpt: 'amirali', date: "2022-02-02", slug: 'getting-started-with-nextjs4' },
]


function AllPostPage() {
    return (
        <AllPosts posts={DUMMMY_POSTS} />
    )
}
export default AllPostPage