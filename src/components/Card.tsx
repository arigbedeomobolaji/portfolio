import React from 'react';
import { Card as AntdCard, Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export default  function Card() {
    return (
  <div
        className='flex flex-col  gap-3 max-w-[350px] border-gray-100 rounded-md border'
  >
    <div className="h-[350px] w-full relative flex items-center justify-center bgGradient">
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
        <Image
            className="absolute top-7 rounded-lg left-7 h-10/12 w-10/12 object-contain z-10"
            src={"https://images.unsplash.com/photo-1633783714421-332b7f929148?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Tm8lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"}
            alt="title"
            priority
            width={0}
            height={0}
            sizes="100vw"
            
        />
     </div>
    <div className='px-3'>
        <h1 className='headingText textGradient'>Project Name</h1>
        <p className='text-gray-300 text-sm  text-justify leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas necessitatibus similique nobis, accusantium quaerat? Perferendis debitis officiis at vel corporis laudantium pariatur accusamus consequuntur velit, reiciendis, laborum voluptate veritatis!</p>
       
        <div className='flex justify-between items-center p-3'>
            <Link target='blank' href="#" className={`bg-contentPrimary p-2 px-3 text-gray-900 font-bold flex items-center justify-center rounded-md `}>Demo</Link>
            <Link target="blank" href="#" className={`bg-contentSecondary text-gray-50 p-2 px-3 font-bold flex items-center justify-center rounded-md `}>Repo</Link>
        </div>
    </div>

  </div>
)};