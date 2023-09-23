
import { metadata } from '@/app/layout'
import DetailCard from '@/components/DetailCard'
import { getResourceById } from '@/sanity/actions'
import { Metadata } from 'next'
import React from 'react'




const page = async ({params}:{params:{id:string}}) => {
  const resouceDetail = await getResourceById(params.id)
  console.log(resouceDetail)

if(resouceDetail._id===params.id)
  metadata.title = resouceDetail.title
 
  return (
    <section className='w-full flex justify-start items-start gap-4 paddings max-sm:flex-wrap'>
      <div className='w-1/2 max-sm:w-full'>
        <DetailCard
         title={resouceDetail.title}
         description={resouceDetail.description}
         image={resouceDetail.image}
         downloadLink={resouceDetail.downloadLink}
        
        />

      </div>
        <section className='w-1/2 max-sm:w-full'>
          <h1 className='heading3 text-white-800 text-center'>Th Words Of Prophet Muhammad (PBUH)</h1>
          <p className='mt-6 text-white-400 text-center'>{resouceDetail.hadithOfTheDay}</p>
        </section>
    </section>
  )
}

export default page
