import Teacher from '../../components/Teacher.jsx'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function Teachers() {
  // read all files in directory: content/teachers
  
  const getFiles = (directory) => {
    const files = fs.readdirSync(directory)
    return files.filter(file => file.endsWith('.md'))
  }
  
  const contentDirectory = path.join(process.cwd(), 'content/teachers');
  const markdownFiles = getFiles(contentDirectory)
  console.log(markdownFiles)

  // Parsing markdown files
  const teachers = markdownFiles.map(file => {
    const filePath = path.join(contentDirectory, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    return { frontMatter: data, content }
  });
  console.log(teachers)


  // const displayTeachers = (t) => {
  //   return t.map((teacher) => {
  //     return <Teacher key={teacher.name} teacher={teacher}/>
  //   })
  // }
  
  return (
    <div>
      <div className='container'>
        <div className='px-20 flex flex-col text-center'>
          <strong className='text-3xl pb-4 italic'>Meet the RHSMA Faculty...</strong>
          <p className='text-lg text-gray-800'>Located close to the Rowland Heights High School, Rowland Heights School of Music of Arts (RHSMA) is a family oriented school. Our goal is to provide the best teaching and services to develop talents of all ages, in an atmosphere of respect, love, and friendship. As we continue to grow, our vision is to further help new students discover and develop their musical and artists talents.</p>
        </div>
      </div>
      <section>
          {/* {displayTeachers(teachers)} */}
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
