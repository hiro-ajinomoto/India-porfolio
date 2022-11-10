import React, { FC, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../types'
import Image from 'next/image';
import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../styles/animation';


const ProjectCard: FC<{ project: IProject }> = ({ project: { category, deployed_url, description, github__url, image_path, key_techs, name } }) => {

	const [showDetail, setShowDetail] = useState(false)
	// disable other projects if one is showing the detail

	return (
		<div >
			<div className='flex justify-center w-full'>
			</div>
			<Image src={image_path}
				alt={name}

				className="cursor-pointer"
				onClick={() => { setShowDetail(true) }}
				width="300"
				height="150"
				layout='responsive'
			/>
			<p className='my-2 text-center'>{name}</p>

			{showDetail && <>
				<motion.div
					variants={stagger}

					animate="animate"
					initial="initial"

					className="absolute top-0 left-0 z-10 grid w-full h-auto text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 ">
					<motion.div
						variants={fadeInUp}

					>
						<Image src={image_path}
							alt={name}

							className="cursor-pointer"
							onClick={() => { setShowDetail(true) }}
							width="300"
							height="150"
							layout='responsive'
						/>

						<div className='flex justify-center my-2 space-x-3'>

							<a href={github__url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200" >
								<AiFillGithub /> <span>Github</span>
							</a>

							<a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200" >
								<AiFillProject /> <span>Project</span>
							</a>
						</div>


					</motion.div>



					<motion.div
						variants={fadeInUp}
					>
						<h2 className='mb-3 text-xl font-medium md:text-2xl'>{name}</h2>
						<h3 className='mb-3 font-medium'>{description}</h3>

						<div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
							{key_techs.map((tech) => <span className='px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200 dark:text-white' key={tech}>{tech}</span>)}
						</div>
					</motion.div>

					<button onClick={() => { setShowDetail(false) }}
						className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"

					>
						<MdClose size={30} />
					</button>
				</motion.div>
			</>
			}


		</div>
	)
}

export default ProjectCard