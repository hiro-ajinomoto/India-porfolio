import React, { FC } from 'react'
import { ISkills } from '../types'
import { motion } from 'framer-motion'

const Bar: FC<{ data: ISkills }> = ({ data: { Icon, level, name } }) => {

	const bar_width = `${level}%`

	const variants = {
		initial: {
			width: 0
		},

		animate: {
			width: level,
			transition: {
				duration: 1,
				type: "spring",
				damping: 10,
				stiffness: 100
			}
		}
	}

	return (
		<div className='my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300'>
			<motion.div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
				style={{ width: level }}
				variants={variants}
				initial="initial"
				animate="animate"
			>
				<Icon className='mr-3' />
				{name}
			</motion.div>
		</div >
	)
}

export default Bar