import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

//fix compatibility issue with nextjs
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Teacher({ prop }) {
  return (
    <article className="grid gap-6">
      {/* <header className="wireframe bg-gray-200 h-[3rem]"></header> */}
      <main className="grid grid-cols-[1fr_minmax(0px,1280px)_1fr] gap-6 gap-y-8">
        <section className="grid grid-cols-12 col-start-2 gap-4 lg:gap-6 gap-y-8 content-start">
          <div className="col-span-12 text-4xl mt-12">{prop.teacher_name}</div>
          <img
            className="col-span-12 h-[13rem] lg:h-[31rem] w-full object-cover lg:col-span-5 lg:row-span-2"
            src={prop.profile_picture}
            alt="teacher profile picture"
          />
          <ul className="text-m xl:text-lg col-span-12 sm:col-span-7 font-bold">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMusic} className='mr-2'/>
              Instrument : {prop.instrument}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              Experience : {prop.years_of_experience}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-1" />
              Education : {prop.education}
            </li>
          </ul>
          <div className="text-xl col-span-12 lg:col-span-7">
            <h4>About</h4>
            <p>{prop.about}</p>
          </div>
          
        </section>
      </main>
      <footer className="wireframe h-[3rem]"></footer>
    </article>
  );
}
