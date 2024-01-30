import Teacher from '../../components/Teacher.jsx'
import { gql } from '@apollo/client'
import { client } from '../../lib/Apollo'
import Link from 'next/link'

const GET_TEACHERS = gql`
query NewQuery {
  posts(where: {categoryName: "Teacher"}) {
    nodes {
      content(format: RAW)
      teacher {
        education
        experience
        instrument
        profilePicture {
          node {
            sourceUrl
          }
        }
      }
      title
    }
  }
}
`
export const dynamic = 'force-dynamic'

export default async function Teachers() {
  // get teachers from database
  let teachers = []
  try {
    // console.log('Before query:', client.cache.extract());

    const { data } = await client.query({
      query: GET_TEACHERS,
      fetchPolicy: 'no-cache',
    })
    // console.log('After query:', client.cache.extract());
    // console.log('data is good')
    // console.log(data.posts.nodes)
    teachers = data.posts.nodes.map((post) => {
      return {
        name: post.title,
        inst: post.teacher.instrument,
        pic: post.teacher.profilePicture.node.sourceUrl,
        bio: post.content.replace(/(<([^>]+)>|\n)/gi, ""),
        exp: post.teacher.experience,
        education: post.teacher.education,
      }
    })
    // console.log('here are the teachers')
    // console.log(teachers)

  } catch (error) {
    console.log(error)
  }


  const displayTeachers = (t) => {
    return t.map((teacher) => {
      return <Teacher key={teacher.name} teacher={teacher}/>
    })
  }
  
  return (
    <div>
      <div className='container'>
        <div className='px-20 flex flex-col text-center'>
          <strong className='text-3xl pb-4 italic'>Meet the RHSMA Faculty...</strong>
          <p className='text-lg text-gray-800'>Located close to the Rowland Heights High School, Rowland Heights School of Music of Arts (RHSMA) is a family oriented school. Our goal is to provide the best teaching and services to develop talents of all ages, in an atmosphere of respect, love, and friendship. As we continue to grow, our vision is to further help new students discover and develop their musical and artists talents.</p>
        </div>
      </div>
      <section>
          {displayTeachers(teachers)}
      </section>
      <div className='container bg-purple-100 py-10'>
        <div className='px-20 flex flex-1 flex-col mt-8 text-center'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl pb-4 text-gray-800 italic font-bold'>Sign Up Today!</h1>
            <h2 className='text-2xl pb-2 text-gray-800'>Have more questions for us? Send us a message or visit our office!</h2>
            <Link href="/contact-us">
              <button className="px-10 py-4 mt-6 mb-4 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Send Us A Message
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
