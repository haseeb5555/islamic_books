import Filters from '@/components/Filters'
import Header from '@/components/Header'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'
interface Props{
searchParams: {[key:string]:string |undefined}
}

const page =  async ({searchParams}:Props) => {
  const resourcesPlaylist= await getResourcesPlaylist();
  
  const resources = await getResources({
    query: searchParams.query||'',
    category: searchParams.category||'',
    page:'1'
  })

  return (
    <main className='flex-center mx-auto w-full flex-col paddings max-w-screen-2xl'>
      <section className='nav-padding w-full'>
      <div className='flex-center relative w-full min-h-[274px] flex-col rounded-xl  bg-cover bg-center text-center'>
         <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>Rise Of Khilafat Resources</h1>
      </div>
      <SearchForm/>
      </section>
      <Filters/>

      {(searchParams.query || searchParams.category )&&(

      <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
        <Header
         query={searchParams?.query||''}
         category={searchParams.category||''}
        />
        <div className='mt-12 flex w-full flex-wrap justify-center gap-16'>
            {resources?.length>0?(
              resources.map((resource:any)=>(
                <ResourceCard key={resource._id}
                  title ={resource.title}
                  id={resource._id}
                  downloadNumber={resource.views}
                  image={resource.image}
                  downloadLink={resource.downloadLink}
                 
                />
              ))
            ):(
              <p className='body-regular text-white-400 '> no result found</p>
            )}
        </div>

      </section>
      )}
       {resourcesPlaylist.map((item: any) => (
        <section key={item._id} className="flex-center mt-6 w-full flex-col sm:mt-20">
          <h1 className="heading3 self-start text-white-800">{item.title}</h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {item.resources.map((resource: any) => (
                <ResourceCard 
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default page
