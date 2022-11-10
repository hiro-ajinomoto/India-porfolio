import Bar from "../components/Bar"
import { languages, tools } from "../data"
import { motion } from 'framer-motion'
import { fadeInUp } from "../styles/animation"
const Resume = () => {


   return <div className="px-6 py-2 dark:text-white">

      {/* education and exp */}
      <motion.div className="grid gap-6 md:grid-cols-2"
         variants={fadeInUp}
         initial="initial"
         animate="animate"
         exit="exit"

      >
         <div
         >
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div>
               <h5 className="my-2 text-xl font-bold">
                  Education of Mathematics
               </h5>
               <p className="font-semibold">Academy of Technology (Cyberlearn 2021-2022) </p>
               <p>I am now learning some courses on Udemy about skills relating to junior front-end dev such as: microservice</p>
            </div>
         </div>

         <div>
            <h5 className="my-3 text-2xl font-bold">Experiences</h5>
            <div>
               <h5 className="my-2 text-xl font-bold">
                  Manabie internship
               </h5>
               <p className="font-semibold">Education company</p>
               <p>I've been trained about soft skills, attitudes, spirit and heighten javascript, typescript here </p>
            </div>


         </div>
      </motion.div>

      {/* languages and tool */}
      <motion.div
         className="grid gap-6 md:grid-cols-2"
         variants={fadeInUp}
         initial="initial"
         animate="animate"
      >
         <div>
            <h5 className="my-3 text-2xl font-bold">
               Languages & framework
            </h5>
            <div className="my-2">
               {languages.map((language, index) => <Bar data={language} key={language.name + index} />)}
            </div>
         </div>


         <div>
            <h5 className="my-3 text-2xl font-bold">
               Tools & Softwares
            </h5>
            <div className="my-2">
               {tools.map((tool, index) => <Bar data={tool} key={tool.name + index} />)}
            </div>
         </div>

      </motion.div>

   </div>

}

export default Resume
