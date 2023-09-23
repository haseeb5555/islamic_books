import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
   <>
    <div className="bg-[#261249] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] bg-opacity-10"></div>
        <div className="bg-[#362b85] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] bg-opacity-60 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
   <Navbar/>
   {children}
  
   </>
  )
}

export default layout
