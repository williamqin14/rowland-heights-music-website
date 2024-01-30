"use client"
import emailjs from '@emailjs/browser'
import { useState } from 'react'



export default function ContactUs() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const closeSentAlert = (e) => {
    e.preventDefault()
    setSent(false)
  }
  
  const closeErrorAlert = (e) => {
    e.preventDefault()
    setError(false)
  }

  // Function called on submit that uses emailjs to send email of valid contact form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const name = formData.get('firstName') + ' ' + formData.get('lastName')
    const email = formData.get('email')
    let subject = formData.get('subject')
    if (!subject) {
      subject = 'Class Inquiry'
    }
    const message = formData.get('message')

    try {
      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      );

      setSent(true)
      
    } catch (e) {
      console.log(e)
      setError(true)

    } 

    document.getElementById('contactForm').reset()
  }

  return (
      <section className="bg-white">
        {sent && (
          <div className="w-full text-white bg-emerald-500">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
              <div className="flex">
                  <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                      <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
                      </path>
                  </svg>

                  <p className="mx-3">Form submitted successfully. We will contact you soon!</p>
              </div>

              <button onClick={closeSentAlert} className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="w-full text-white bg-red-500">
              <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                  <div className="flex">
                      <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                          <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z">
                          </path>
                      </svg>

                      <p className="mx-3">An error occured. Please try again later.</p>
                  </div>

                  <button onClick={closeErrorAlert} className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                  </button>
              </div>
          </div>
        )}

        <div className="container px-6 py-12 mx-auto">
            <div>

                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Contact Us!</h1>

                <p className="mt-3 text-gray-500">Interested in joining a class? Ask us about class schedule and course offerings here!</p>
                {/* <p className="mt-3 text-gray-500">Please fill out this form and we will get back to you shortly!</p> */}
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
                    <form id='contactForm' onSubmit={handleSubmit}>
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600">First Name</label>
                                <input required name="firstName" type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600">Last Name</label>
                                <input required name="lastName" type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600">Email address</label>
                            <input required name="email" type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600">Subject</label>
                            <input name="subject" type="text" placeholder="Enter Subject Here" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm text-gray-600">Message</label>
                            <textarea required name="message" className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Send message
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                      <iframe width="100%" height="100%" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.168632348168!2d-117.88485212287256!3d33.98820207318124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32afe9f053a7f%3A0x9ab468b5ae1a07d2!2sRowland%20Heights%20School%20Of%20Music%20And%20Artz!5e0!3m2!1sen!2sus!4v1704954823137!5m2!1sen!2sus"></iframe>
                    </div>

                    <div>
                        <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </span>
                        
                        <h2 className="mt-4 text-base font-medium text-gray-800">Location</h2>
                        <p className="mt-2 text-sm text-gray-500">In Crown Plaza, between Banida Ave. and Otterbein St.</p>
                        <p className="mt-2 text-sm text-blue-500 hover:text-blue-800"><a target='_blank' href='https://maps.app.goo.gl/RHFqTLtVHt4FZp8g7'>19271 Colima Rd. Suite H, Rowland Heights, CA 91748</a></p>
                    </div>

                    <div>
                        <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </span>
                        
                        <h2 className="mt-4 text-base font-medium text-gray-800">Phone</h2>
                        <p className="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p>
                        <p className="mt-2 text-sm text-blue-500 hover:text-blue-800"><span className='text-gray-500'>Cell: </span><a href='tel:+16263910336'>+1 (626) 391-0336</a></p>
                        <p className="mt-2 text-sm text-blue-500 hover:text-blue-800"><span className='text-gray-500'>Landline: </span><a href='tel:+16269642499'>+1 (626) 964-2499</a></p>
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
};
