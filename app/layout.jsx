import './globals.css'
// import '@wordpress/block-library/build-style/style.css' 
// import '@wordpress/block-library/build-style/theme.css'
import { Open_Sans } from 'next/font/google'

// libraries
// import { client } from '../lib/Apollo'

// components
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoogleAnalytics from '../components/GoogleAnalytics'


const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Rowland Heights School of Music and Arts',
  description: 'The Rowland Heights School of Music and Arts offers music lessons in Rowland Heights, California',
  metadataBase: 'https://rowlandmusicschool.com/',
  icons: {
    icon: '/piano-svg.svg',
  },
  openGraph: { 
    type: "website", 
    url: "https://rowlandmusicschool.com/", 
    title: "Rowland Heights School of Music and Arts", 
    description: "Music lessons in Rowland Heights, CA", 
    siteName: "Rowland Heights School of Music and Arts",
    locale: 'en_US',
    images: [
      {
        url: '../public/piano-svg.png',
      },
    ],
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="../public/siniz-kim-LZ3O2Q4Me0Q-unsplash.webp" as="image" />
      </Head>
      <body className={openSans.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        <Navbar/>
          {children}
        <Footer />
      </body>
    </html>
  )
}
