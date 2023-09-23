import {groq} from 'next-sanity'
import { readClient } from './lib/client';
import { buildQuery } from './utils';

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}

export const getResourceById = async (id:string) => {
  try {
    const resource = await readClient.fetch(
      groq`*[_type == "resource" && _id == "${id}"]{
        _id,
        title,
        views,
        "image":poster.asset->url,
        downloadLink,
        category,
        description,
        hadithOfTheDay
      }`
    );

    return resource.length > 0 ? resource[0] : null;
  } catch (error) {
    console.log(error);
  }
};


type Params={
    query:string;
    category:string;
    page:string
}

export const getResources= async (params:Params)=>{
   const { query,category,page  }=params;
   try {
     const resources = await readClient.fetch(
        groq `${buildQuery({
           type:'resource',
           query,
           category,
           page:parseInt(page)
   })}{
       title,
       _id,
       downloadLink,
       "image":poster.asset->url,
       views,
       slug,
       category
   }`
     );
     return resources;
   } catch (error) {
     console.log(error)
   }

}