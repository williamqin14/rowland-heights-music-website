'use client'
import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../../content/home.md'

export default class Blog extends Component {
  render() {
    let { title, cats } = attributes
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article className='container flex-col'>
          <h1 className='font-bold'>{title}</h1>
          <HomeContent/>
          <ul className='pt-3'>
            {cats.map((cat, k) => (
              <li key={k} className='pb-3'>
                <h3 className='p-0'>{cat.name}</h3>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}