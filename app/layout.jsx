import './globals.css'
import '@wordpress/block-library/build-style/style.css' 
import '@wordpress/block-library/build-style/theme.css'
import { Open_Sans } from 'next/font/google'

// libraries
// import { client } from '../lib/Apollo'

// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Rowland Heights School of Music and Arts',
  description: 'Music lessons in Rowland Heights, CA',
  icons: {
    icon: '/piano svg.svg',
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar/>
          {children}
        <Footer />
      </body>
    </html>
  )
}
