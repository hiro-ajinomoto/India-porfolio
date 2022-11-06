import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectNavBar from "../components/ProjectNavBar"
import { projects as projectsData } from "../data"
import { Category } from "../types"

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

   return <div className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>

      <ProjectNavBar handlerFilterCategory={handlerFilterCategory} active={active} />


      <div className="relative grid grid-cols-12 gap-4 my-3">
         {projects.map((project, index) => (
            <div className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200 dark:text-white">
               <ProjectCard project={project} key={index + project.name} />
            </div>

         ))}
      </div>



   </div>
}

export default Projects
