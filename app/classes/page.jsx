import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Class from '../../components/Class'

export default async function Classes() {
    // read all files in directory: content/classes

    const getFiles = (directory) => {
      const files = fs.readdirSync(directory)
      return files.filter(file => file.endsWith('.md'))
    }
    
    const markdownFiles = getFiles('content/classes')

    // // Parsing markdown files
    const classes = markdownFiles.map(file => {
      const filePath = path.join('content/classes', file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      return matter(fileContent).data
    })


    const displayClasses = (t) => {
      return t.map((data) => {
        return <Class key={data.class_title} prop={data}/>
      })
    }

    return (
        <>
        <div className='container'>
            <div className='px-20 flex flex-col text-center flex-1 bg-purple-100 py-10'>
            <strong className='text-3xl pb-4 italic'>Class Schedules</strong>
            <p className='text-lg text-gray-800'>Our current schedules for the Winter and Spring Terms are listed here!</p>
            </div>
        </div>

        {/* Schedules */}
        <section className='container flex-col'>
            {displayClasses(classes)}
        </section>

        <div className="wireframe h-[3rem]"></div>

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