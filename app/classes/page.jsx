'use client'
import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../../content/home.md'
import Link from 'next/link'

export default class Blog extends Component {
  render() {
    let { title, cats } = attributes
    return (
        <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>

        <div className='container'>
            <div className='px-20 flex flex-col text-center'>
            <strong className='text-3xl pb-4 italic'>Our Classes</strong>
            <p className='text-lg text-gray-800'>Located close to the Rowland Heights High School, Rowland Heights School of Music of Arts (RHSMA) is a family oriented school. Our goal is to provide the best teaching and services to develop talents of all ages, in an atmosphere of respect, love, and friendship. As we continue to grow, our vision is to further help new students discover and develop their musical and artists talents.</p>
            </div>
        </div>

        {/* Schedules */}
        <section className='container flex-col text-center'>
            <div>Class</div>
            <div>Class</div>
            <div>Class</div>
            <div>Class</div>
            <div>Class</div>
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
      </>
    )
  }
}