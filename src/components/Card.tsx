import React from 'react';
import Magnet from "@src/assets/svg/magnet.svg"
import Github from "@src/assets/svg/github.svg"
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface CardProps {
    projectName: String,
    projectDescription: String,
    projectImage?: any | String,
    projectWebsite?: Url;
    projectRepo: Url;
    isLive: Boolean
}


export default  function Card({projectName, projectDescription, projectImage, projectWebsite, projectRepo, isLive}: CardProps): React.ReactElement {
    return (
  <div
        className='flex flex-col  gap-5 max-w-[350px] border-gray-100 rounded-md border'
  >
    <div className="h-[300px] w-full relative flex items-center justify-center bgGradient hover:scale-110">
        <div className="w-full h-full blur-sm opacity-90">
            <Image
                priority
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                src={ "https://images.unsplash.com/photo-1633783714421-332b7f929148?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Tm8lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"}
                alt="title"
                className="w-full h-full object-cover"
            />
        </div>
        {/* Overlay */}
        <div className='absolute top-0 rounded-lg left-0 h-full w-full overflow-hidden'>
        <Image
            className="h-full w-full object-contain z-10"
            src={projectImage ? projectImage : "https://images.unsplash.com/photo-1633783714421-332b7f929148?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Tm8lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"}
            alt="title"
            priority
            width={0}
            height={0}
            sizes="100vw"
            
        />
        </div>
        
     </div>
    <div className='px-3 flex flex-grow flex-col flex-1'>
        <h1 className='headingText textGradient text-[22px]'>{projectName}</h1>
        <p className='text-gray-500 text-sm  text-justify leading-6'>{projectDescription.substring(1,200)}..</p>
       
        <div className='flex justify-between items-center p-3'>
           {projectWebsite && <Link target='blank' href={projectWebsite} className={`text-contentPrimary p-2 px-3 border-b border-b-gray-500 flex items-center justify-center rounded-md gap-3`}>
            <Image src={Magnet} alt="Magnet" />
            Demo</Link>}
            <Link target="blank" href={projectRepo} className={`text-contentSecondary p-2 px-3 border-b border-b-gray-500 items-center justify-center rounded-md flex gap-4`}>
                <Image src={Github} alt="github" />
                Repo</Link>
        </div>
    </div>

  </div>
)};