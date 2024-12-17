import React from 'react'
import { color, motion } from "motion/react"
import { easeIn, easeOut } from 'motion'
import team1 from '../assets/Team/team1.jpg'
import team2 from '../assets/Team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content -ml-60 md:ml-0 flex-col lg:flex-row-reverse">
                <div className='flex-1 '>
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-96 border-l-8  border-blue-500 border-b-8 rounded-t-3xl rounded-r-3xl  shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-72 border-l-8  border-blue-500 border-b-8 rounded-t-3xl rounded-r-3xl  shadow-2xl" />

                </div>
                <div className='flex-1 mt-10 '>
                    <motion.h1
                        animate={{ y: -40 }}
                        transition={{
                            duration: 2, delay: 0, ease: easeOut,

                        }}

                        className="text-5xl font-bold">The Easiest Way
                        <motion.span
                            animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
                            transition={{ duration: 1, delay: 0, repeat: Infinity }}

                        >to Get Your New Job</motion.span>  </motion.h1 >
                    <motion.div
                    animate={{y:-30}}
                    transition={{duration:1, delay:0, ease:easeIn}}
                    >
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Banner
