import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectNavBar from "../components/ProjectNavBar"
import { projects as projectsData } from "../data"
import { Category } from "../types"
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from "../styles/animation"
const Projects = () => {

   const [projects, setProjects] = useState(projectsData)
   const [active, setActive] = useState("all")

   const handlerFilterCategory = (category: Category | 'all') => {
      if (category === 'all') {
         setProjects(projectsData)
         setActive(category)
         return
      }

      const newArrays = projectsData.filter(project => project.category.includes(category))

      setProjects(newArrays)
      setActive(category)
   }

   return <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>

      <ProjectNavBar handlerFilterCategory={handlerFilterCategory} active={active} />

      <motion.div
         variants={stagger}
         initial="initial"
         animate="animate"
         className="relative grid grid-cols-12 gap-4 my-3">
         {projects.map((project) => (
            <motion.div
               variants={fadeInUp}
               className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200 dark:text-white">
               <ProjectCard project={project} key={project.name + Date} />
            </motion.div>

         ))}
      </motion.div>



   </motion.div>
}

export default Projects
