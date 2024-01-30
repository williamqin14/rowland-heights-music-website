
import { gql } from '@apollo/client'
import { client } from '../../lib/Apollo'
import BlogContent from '../../components/BlogContent'

const GET_BLOG_POSTS = gql`
query GetPosts {
  posts(where: {categoryName: "Blog post"}) {
    nodes {
      content
    }
  }
}
`
export const dynamic = 'force-dynamic'

export default async function Blog() {
    let blogs = '<div>Error!</div>'
    try {
    const { data } = await client.query({
      query: GET_BLOG_POSTS,
      fetchPolicy: 'no-cache',
    })
    blogs = data.posts.nodes[0].content

    } catch (error) {
        console.log(error)
    }

    return (
        <div className='container'>
            <BlogContent htmlContent={blogs} />
        </div>
    )
}
