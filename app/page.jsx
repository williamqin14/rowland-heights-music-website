//components

//libraries 
import Image from 'next/image'
import Link from 'next/link'
import { gql } from '@apollo/client'

//images
import Kids from '../public/IMG_7172.jpeg'
import Testimony1 from '../public/Yelp-image-1.jpeg'
import Testimony2 from '../public/googleReview1.png'


const GET_TITLE = gql`
  query NewQuery {
    posts {
      nodes {
        title
      }
    }
  }
`

export default async function Home() {
  return (
    <>
    <main className='items-center'>
      <div className='w-full'>
        <div className='bg-hero flex justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-text text-white p-3'>
              <h1 className='text-7xl'>Music Lessons In Rowland Heights</h1>
              <h2 className='text-2xl'>Welcome to the Rowland Heights School of Music and Arts!</h2>
            </div>
            <Link href="/contact-us">
              <button className="px-10 py-4 mt-4 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Sign up for a class
              </button>
            </Link>
          </div>
        </div> 
      </div>
      <div className='container'>
        <div className='container px-20 flex flex-col text-center'>
          <strong className='text-3xl pb-4 italic'>Get The Musical Edge!</strong>
          <p className='text-lg text-gray-800'>Located close to the Rowland Heights High School, Rowland Heights School of Music of Arts (RHSMA) is a family oriented school. Our goal is to provide the best teaching and services to develop talents of all ages, in an atmosphere of respect, love, and friendship. As we continue to grow, our vision is to further help new students discover and develop their musical and artists talents.</p>
        </div>
      </div>
      {/* <div className='container flex-row lg:flex-nowrap justify-center'>
        <div className='lg:w-1/3 mb-8 mr-8 items-center'>
          <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="cover" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-32 h-32 mb-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
          </div>
          <span className='flex text-lg justify-center pb-3'><strong>Expertise</strong></span>
          <span className='flex text-lg text-gray-800 text-center'>Our expertly trained teachers will provide you with the best guidance and feedback to guide your development.</span>
        </div>
        <div className='lg:w-1/3 mb-8 mr-8 items-center'>
          <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-32 h-32 mb-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
            </svg>
          </div>
          <span className='flex text-lg justify-center pb-3'><strong>Classes</strong></span>
          <span className='flex text-lg text-gray-800 text-center'>
            We offer classes in piano, violin, cello, voice, saxophone, clarinet, flute, guitar, drums, accordion, and more!
            </span>
        </div>
        <div className='lg:w-1/3 mb-8 items-center'>
          <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-32 h-32 mb-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
            </svg>
          </div>
          <h4 className='flex text-lg justify-center'>Learning Enrichment</h4>
          <p className='text-lg text-gray-800 text-center'>As a student of RHSMA, you will receive opportunities to attend recitals, competitions, and royal music exams (ABRSM, London, U.K.)</p>
        </div>
      </div> */}

      <div className='container bg-purple-100'>
        <div className='container justify-center flex-col lg:border-r-4 lg:border-gray-500'>
          <h1 className='font-bold text-center'>CLASSES OFFERED</h1>
          <div className='container font-bold text-2xl px-10'>
            <div className='flex-1'>
              <ul className='list-disc px-20'>
                <li>Piano</li>
                <li>Violin</li>
                <li>Cello</li>
                <li>Voice</li>
                <li>Saxophone</li>
                <li>Clarinet</li>
              </ul>
            </div>
            <div className='flex-1'>
              <ul className='list-disc px-20'>
                <li>Flute</li>
                <li>Guitar</li>
                <li>Drums</li>
                <li>Accordion</li>
                <li>and More...</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='container flex-col'>
          <h1 className='font-bold text-center'>LEARNING ENRICHMENT</h1>
          <div className='container font-bold text-2xl justify-center px-10'>
            <ul className='list-disc px-20'>
              <li>Recitals</li>
              <li>Competitions</li>
              <li>Royal Music Exam (London, U.K.)</li>
            </ul>
          </div>
        </div>
      </div>
      
      
      <div className='container'>
        <div className='xl:w-1/2 h-3/4'>
          <div className='container'>
            <Image 
              className='object-fit'
              src={Kids} 
              alt='Outside our school location' 
              />
          </div>
        </div>
        <div className='px-20 flex flex-[1_1_0%] flex-col lg:w-1/2 mt-8 text-center'>
          <strong className='text-xl pb-4'>About Us</strong>
          <p className='text-lg text-gray-800'>We began with just a few students, merely engaging in home teaching. As the number of students grew, a building space was needed to house the Rowland Heights School of Music and Arts. From then on, the school has gained acceptance and recognition in the community through the RUSD Recreation Department and through referrals by word-of-mouth advertisement. We were slowly growing but were not spared from struggles and challenges that we had to overcome through deep faith in God, dedication, passion and hard work, to be worthy of the trust given us by the families who believed in us.</p>       
          <br></br>
          <p className='text-lg text-gray-800'>We are proud to say, that throughout the 35 years, we have developed and nurtured fine students, not only musically, but also intellectually, emotionally, and socially, molding them to become well-rounded and responsible individuals.</p>
          <Link href="/teachers">
              <button className="px-8 py-4 mt-10 text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  See Our Teachers!
              </button>
            </Link>
        </div>
      </div>
      <div className='container'>
        <section className="bg-white flex-1">
          <div className="flex-col px-6 mx-auto justify-center">
              <h1 className="text-gray-800 text-center capitalize italic">
                  What our students say
              </h1>

              <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-4 max-w-7xl">
                  <div className="p-6 rounded-lg md:p-8">
                        <p className="leading-loose text-gray-500">
                          My daughter has been taking piano lessons for over 3 years now. Mrs. Yolanda (Dr. Fresnoza) is the best! She is sweet, kind and patient with my child, even on those days when my daughter isn&apos;t exactly up to the lesson. Plus, every year the school puts on a lovely recital for the students and their families. I highly recommend this music school!
                        </p>

                      <div className="flex items-center mt-6">
                          <Image 
                            className='object-cover rounded-full w-14 h-14'
                            src={Testimony1}
                            alt='Victoria M. Yelp Review'
                          />
                          
                          <div className="mx-4">
                              <div className="font-semibold text-gray-00">Victoria M.</div>
                              <span className="text-sm text-gray-500">Mother</span>
                          </div>
                      </div>
                  </div>

                  <div className="p-6 rounded-lg md:p-8">
                      <p className="leading-loose text-gray-500">
                          Mrs Yolanda is a very nice and experience piano teacher. Very great and patient to teach the children. Classes prices are affordable, the room is a little snug, but it works.
                      </p>

                      <div className="flex items-center mt-6">
                          <Image 
                            className='object-cover rounded-full w-14 h-14'
                            src={Testimony2}
                            alt='Victoria M. Yelp Review'
                          />
                          
                          <div className="mx-4">
                              <div className="font-semibold text-gray-600">George Vasquez</div>
                              <span className="text-sm text-gray-500">Local Guide</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
      </div>
      <div className='container bg-purple-100 py-10'>
        <div className='px-20 flex flex-1 flex-col mt-8 text-center'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl pb-4 text-gray-800 italic font-bold'>Sign Up Today!</h1>
            <h2 className='text-2xl pb-2 text-gray-800'>Have more questions for us? Send us a message or visit our office!</h2>
            {/* <h2 className='text-2xl pb-2 text-gray-800'>Discover and develop your talent. <u>We make it happen!</u></h2> */}
            <Link href="/contact-us">
              <button className="px-10 py-4 mt-6 mb-4 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Send Us A Message
              </button>
            </Link>
          </div>
        </div>
      </div>

    </main>
    </>
  )

}