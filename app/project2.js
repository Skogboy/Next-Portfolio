
import { useRef } from 'react'
import { motion, easeInOut, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import javascriptLogo from '../public/javascript.png'
import overing from '../public/overing.png'
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'

export default function Project2() {
    const ref = useRef(null) 
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['0 1', '1.33 1'],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1], {ease: easeInOut })
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])

    return (
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          >

        <div className='flex flex-col gap-10 py-10 md:flex-initial lg:flex-row lg:flex-wrap lg:flex-initial '>
          <div className='basis-1/2 flex-1 '>
            <div class="card" data-color='blue'>
            <a href='https://ecomsitebenjaminskogman.netlify.app/' target='_blank'>
            <Image src={overing} class='card-front-image card-image'  width={"100%"} height={'100%'} layout="responsive" />
            </a>
            <div class="card-faders">
              <Image class="card-fader card-image" src={overing} />
              <Image class="card-fader card-image" src={overing} />
              <Image class="card-fader card-image" src={overing} />
              <Image class="card-fader card-image" src={overing} />
              <Image class="card-fader card-image" src={overing} />
              <Image class="card-fader card-image" src={overing} />
              <Image class="card-fader card-image" src={overing} />
              <Image class="card-fader card-image" src={overing} />
            </div>
            </div>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl ml-5 flex-col md:flex-auto dark:shadow-white dark:shadow-sm dark:shaodw-inner dark:bg-blend-lighten  '>
            <Image src={javascriptLogo} width={100} height={100} className='m-auto ' />
            <h3 className='text-2xl font-medium pt-8 pb-2 dark:text-white'>
              Ecommerce Site
            </h3>
            <p className=' m-auto items-center flex-initial py-2 text-center lg:max-w-lg dark:text-white'>
            Shop and explore products in a developed Ecommerce Site made with HTML, CSS and JavaScript.
            </p>
            <button className='py-10 text-4xl dark:text-white'><a href='https://github.com/Skogboy' target='_blank' ><AiFillGithub /></a></button>
          </div> 
        </div>
        </motion.div>
    )
}