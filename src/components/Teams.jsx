import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
import { motion } from "motion/react"

const Teams = () => {
  return (
    <motion.div 
           initial= "hidden"
           whileInView= "visible"
           viewport={{ once: true}}
    className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
        <Title title='Meet the team' des='A passionate team of digital experts dedicated to your brands success.'/>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {teamData.map((team,index)=>(
                <motion.div
                   initial={{opacity: 0, y: 20}}
                   whileInView={{ opacity: 1, y: 0}}
                   transition={{duration: 0.4, delay: index * 0.1}}
                   viewport={{ once: true}}
                key={index} className="flex items-center gap-4 px-6 py-4 rounded-full border border-gray-200 dark:border-gray-700shadow-lg hover:shadow-xltransition-all duration-300"
>
                    <img src={team.image} alt={team.name} className="w-14 h-14 rounded-full object-cover shrink-0"/>
                    <div className="leading-tight">
                         <h3 className="font-semibold text-sm">{team.name}</h3>
                         <p className="text-xs opacity-60">{team.title}</p>
                      </div>
                </motion.div>
            ))}

        </div>
    </motion.div>
  )
}

export default Teams