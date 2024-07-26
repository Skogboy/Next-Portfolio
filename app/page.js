'use client';
import { useState, useRef } from 'react'
import {Link} from 'react-scroll'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import Image from 'next/image'
import webdev from '../public/webdev.png'
import art from '../public/art.png'
import projectPicture from '../public/project.png'
import { motion, useScroll, useTransform, easeInOut } from 'framer-motion'
import Project from '../app/project.js'
import Project2 from '../app/project2.js'

import './style.css'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  const ref = useRef(null) 
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 2'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1], {ease: easeInOut })
  const opacityProgress = useTransform(scrollYProgress, [1, 1], [0.8, 1])

  return (
    <div className={darkMode ? 'dark' : ''}>
    <div>
      <div>
        <title >Benjamin Skogman Portfolio</title>
        <meta name='description' content='Generated' />
      </div>
      {/* Title */}
    <main className='select-none bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800 '>
      <section className='min-h-screen'>
        <nav className='p-7 mb-7 justify-evenly md:p-10mb-12 md:mb-10 flex md:justify-between'>
          <h1 className='overflow-y-scroll no-scrollbar h-[calc(15vh-74px)] overflow-auto lg:aspect-square-tl-3xl text-l md:text-xl font-burtons dark:text-white'>Gurple Industires</h1>
          <ul className='flex items-center '>
            <li ><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 " href='/files/Benjamin_Skogman_Resume_.pdf' target='_blank' download> Resume</a></li>
            <li ><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 " href="#"><Link to="Projects" spy={true} smooth={true} offset={50} duration={500} > Projects</Link></a></li>
            <li ><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 " href='#' ><Link to="About" spy={true} smooth={true} offset={50} duration={500} >About</Link></a></li>
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode, console.log('dark'))} className='cursor-pointer text-2xl dark:text-white ml-10' />
            </li>
          </ul>
        </nav>
        
        <div className='text-center py-10'>
          <h2 className=' select-none w-full h-42 overflow-y-scroll no-scrollbar text-6xl py-2 text-teal-600 font-medium md:text-7xl lg:text-7xl '>Hey, I&apos;m Ben</h2>
          <h3 className='select-none text-4xl py-5 pt-5 md:text-5xl dark:text-white '>I&apos;m a Web Developer</h3>
          <div className='py-5 md:py-5'></div>
          <p className='text-md py-5 leading-8 text-gray-800 md: text-xl max-w-xl mx-auto dark:text-white'> 
            I&apos;ve spent years building and scaling software for companies and projects. Let&apos;s connect!
          </p>
          <h1 className='pt-10'><Link to="Projects" spy={true} smooth={true} offset={50} duration={500} className=" bg-gradient-to-r from-blue-400 to-teal-900 text-white px-4 py-2 rounded-md ml-8 text-2xl md:text-4xl" href="#"> View my Work</Link></h1>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-10 text-gray-600 dark:text-white'>
          <button ><a href='https://github.com/Skogboy' target='_blank' ><AiFillGithub /></a></button>
          <button ><a href='https://www.linkedin.com/in/benjamin-skogman-6729b4227/' target='_blank' ><AiFillLinkedin /></a></button>
          <button ><a href='mailto: skogman.ben@gmail.com?subject = Feedback' ><AiOutlineMail /></a></button>
        </div>
        {/* <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={deved} layout='fill' objectFit='cover' />
        </div> */}
      </section>
      
      <section className='select-none ' >
      
      <div id='About' className='mb-40 text-center opacity-0'>
        ??
      </div>  

        <div>
          <h3 className='text-5xl py-5 mb-3 dark:text-white font-bold text-center'>
             About Me</h3>
          <p className='text-xl py-2 leading-8 text-gray-800 dark:text-yellow-50 font-medium text-center mb-3'>
            Since the beginning of my journey as designer and
            developer, I&apos;ve built 
            <span className="text-teal-500"> apps </span>
              and  <span className="text-teal-500">designs </span>
              that take my developing to the next level
          </p>
          
          <p className='text-md py-2 leading-8 text-gray-800'>

          </p>
        </div>     
              <motion.div 
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
          }}
      > 
        <div className='lg:flex gap-10 dark:text-white '>
          <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:shadow-white dark:shadow-sm dark:shaodw-inner dark:bg-blend-lighten'>
            <Image src={art} width={100} height={100} className='m-auto' />
            <div >
        </div>
            <h3 className='text-2xl font-medium pt-8 pb-2'>
              Beautiful Designs
            </h3>
            <p className='py-2'>
              I value content structure, clean design patterns, and thoughtful interations
            </p>
            <p className='pt-10 text-2xl font-medium text-teal-500'>Things I enjoy designing:</p>
            <p className='py-4 text-md '>UX, UI, Web, Mobile, Apps and Logos</p>
            <p className='text-gray-800 py-1'> </p>
            <p className='text-gray-800 py-1'> </p>
            <p className='text-gray-800 py-1'> </p>
            <p className='text-gray-800 py-1'> </p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-white dark:shadow-sm dark:shaodw-inner dark:bg-blend-lighten'>
            <Image src={webdev} width={100} height={100} className='m-auto' />
            <h3 className='text-2xl font-medium pt-8 pb-2'>
              Web Developing
            </h3>
            <p className='py-2'>
              I love creating full-stack applications that bring ideas to life in the browser from scratch
            </p>
            <p className='pt-10 text-2xl font-medium text-teal-500'>Tools I use:</p>
            <p className='py-4 text-md '>CSS, JavaScript, React, Next.JS, Python, FireBase and more!  </p>
            <p className='text-gray-800 py-1'> </p>
            <p className='text-gray-800 py-1'> </p>
            <p className='text-gray-800 py-1'> </p>
            <p className='text-gray-800 py-1'> </p>
          </div>          
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-white dark:shadow-sm dark:shaodw-inner dark:bg-blend-lighten'>
            <Image src={projectPicture} width={100} height={100} className='m-auto ' />
            
            <h3 className='text-2xl font-medium pt-8 pb-2'>
              Project Manager
            </h3>
            <p className='py-2'>
            Coordinating and overseeing various aspects of a project, including planning, execution, and communication
            </p>
            <p className='pt-10 text-2xl font-medium text-teal-500'>People worked with:</p>
            <p className='py-4 text-md '>Worked with various entrepreneurs with design, development, ads and resource management  </p>
            <p className='text-gray-800 py-1'> </p>
            <p className='text-gray-800 py-1'> </p>
            <p className='text-gray-800 py-1'> </p>
            <p className='text-gray-800 py-1'> </p>
          </div>
          
        </div>
      </motion.div>
      </section>
      <section>
        <div>
        <div id='Projects' className='mb-40 text-center opacity-0'>
          ??
        </div>
          <h3 className='text-5xl py-1 dark:text-white text-center font-bold mt-40  '>
            Projects</h3>
          <h3 className='text-lg font-medium pt-8 pb-2 text-center dark:text-white'>
            Here are a few web apps and designs I&apos;ve worked on recently
            </h3>
            <p className='py-2 '>

            </p>
        </div>
        <Project />
        <Project2 />
        <div id='contact-me' className=' text-center opacity-0'>
          ??
        </div>
        <div>
          <h3 className='text-5xl py-5 mb-3 dark:text-white font-bold text-center'>
             Contact</h3>
          <p className='text-xl py-2 leading-8 text-gray-800 dark:text-yellow-50 font-medium text-center mb-3'>
          Have interest working with me? Please contact by accesseing any of these links
            <span className="text-teal-500">  </span>
          </p>
          
          <p className='text-xl font-medium text-center py-2 leading-8 text-gray-800 dark:text-white'>
            You can also contact me at +1-763-458-3033
          </p>
          <div className='text-5xl flex justify-center gap-16 py-10 text-gray-600 dark:text-white'>
          <button ><a href='https://github.com/Skogboy' target='_blank' ><AiFillGithub /></a></button>
          <button ><a href='https://www.linkedin.com/in/benjamin-skogman-6729b4227/' target='_blank' ><AiFillLinkedin /></a></button>
          <button ><a href='mailto:skogman.ben@gmail.com' ><AiOutlineMail /></a></button>
        </div>
        </div>
      </section>
    </main>
    </div>
    </div>
  )
}
