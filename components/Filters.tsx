"use client"

import { useState } from "react"
import {useSearchParams,useRouter} from 'next/navigation'
import { formUrlQuery } from "@/sanity/utils"
const links =["all","quran translations","hadith","fiqh","history"]
const Filters = () => {
  const [active, setActive] = useState("")
  const searchParams=useSearchParams();
  const router = useRouter()
  const handlefilter=(link:string)=>{
    let newUrl =''
    if(active===link){
      setActive('');
      formUrlQuery({
      params:searchParams.toString(),
      key:'category',
      value:null
    }
  
    )
  }
  else{
    setActive(link);
     newUrl=formUrlQuery({
    params:searchParams.toString(),
    key:'category',
    value:link.toLowerCase()
  } )  }
 
        router.push(newUrl,{scroll:false})
  }
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
     {links.map((link)=>(
      <button key={link} onClick={()=>handlefilter(link)} className={`${active===link?'gradient_blue-purple':''} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}>
       {link}
      </button>
     ))}
    </ul>
  )
}

export default Filters
