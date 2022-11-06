import Bar from "../components/Bar"
import { languages, tools } from "../data"

const Resume = () => {
   return <div className="px-6 py-2 dark:text-white">

      {/* education and exp */}
      <div className="grid gap-6 md:grid-cols-2">
         <div>
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div>
               <h5 className="my-2 text-xl font-bold">
                  Education of Mathematics
               </h5>
               <p className="font-semibold">Academy of Technology (Cyberlearn 2021-2022) </p>
               <p>I am now learning some course on Udemy about skills related to junior front-end dev such as: microservice</p>
            </div>


         </div>


         <div>
            <h5 className="my-3 text-2xl font-bold">Experiences</h5>
            <div>
               <h5 className="my-2 text-xl font-bold">
                  Education of Mathematics
               </h5>
               <p className="font-semibold">Academy of Technology (Cyberlearn 2021-2022) </p>
               <p>I am now learning some course on Udemy about skills related to junior front-end dev such as: microservice</p>
            </div>


         </div>
      </div>

      {/* languages and tool */}
      <div className="grid gap-6 md:grid-cols-2">

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

      </div>

   </div>

}

export default Resume
