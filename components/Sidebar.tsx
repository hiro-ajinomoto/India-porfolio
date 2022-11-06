import { useTheme } from 'next-themes'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'

const Sidebar = () => {

   const { theme, setTheme } = useTheme()

   const changeTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }

   return (
      <div className='dark:text-white'>
         <img
            src='https://i.pinimg.com/564x/a2/aa/74/a2aa748b6b183e6dd8e4e42964d1b87e.jpg'
            alt='avatar'
            className='w-32 h-32 mx-auto border rounded-full '
         />
         <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
            <span className='text-green '>Phan Hoang</span> Dat
         </h3>
         <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 '>
            Web Developer
         </p>
         {/* Resume */}
         <a
            href='/assets/Sumit Dey Resume.pdf'
            download='Sumit Dey Resume.pdf'
            className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 '>
            <GiTie className='w-6 h-6' />
            <span>Download Resume</span>
         </a>

         {/* Socials */}
         <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full '>

            <a href='https://www.linkedin.com/in/dat-phan-hoang-5736431b9/'>
               <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://www.linkedin.com/in/dat-phan-hoang-5736431b9/'>
               <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
            </a>
         </div>

         {/* Contacts */}
         <div
            className='py-4 my-5 bg-gray-200 dark:bg-dark-700'
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center'>
               <GoLocation className='mr-2' /> <span> Thanh Chuong, Nghe An </span>
            </div>
            <p className='my-2 '> dathoang9635@gmail.com </p>
            <p className='my-2'> +84 363267637 </p>
         </div>

         {/* Email Button */}

         <button
            className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none'
            onClick={() => window.open('mailto:dathoang9635@gmail.com')}>
            Email me
         </button>

         <button
            onClick={changeTheme}
            className='w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer whitespace-nowrap bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105'>Toggle Theme</button>
      </div>
   )
}

export default Sidebar
