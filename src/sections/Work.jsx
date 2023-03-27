
import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/components/variants';

const Work = () => {
  return(
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>

          <motion.div  variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>

            <div>
              <h2 className='h2 leading-tight text-white'>My Latest <br /> work</h2>
              <p className='max-w-sm mb-16'>Placeat modi distinctio Placeat modi distinctio Placeat modi distinctio corporis voluptates dolore minus voluptas alias!</p>
              <button className='btn btn-sm'>View all project</button>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

              <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300'></div>

              <img className='group-hover:scale-125 transition-all duration-500' src='/portfolio-img1.png'/>

              <div className='absolute -botton-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span> 
              </div>
             
              <div className='absolute -botton-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>

            </div>

          </motion.div>

          <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-10'>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

              <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300'></div>

              <img className='group-hover:scale-125 transition-all duration-500' src='/portfolio-img2.png'/>

              <div className='absolute -botton-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span> 
              </div>

              <div className='absolute -botton-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>

            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300'></div>

                <img className='group-hover:scale-125 transition-all duration-500' src='/portfolio-img3.png'/>

                <div className='absolute -botton-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>UI/UX Design</span> 
                </div>

                <div className='absolute -botton-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Project Title</span>
                </div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Work;