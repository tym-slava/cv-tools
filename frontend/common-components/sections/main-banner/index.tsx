import React from "react";
import { Card, CardHeader, CardFooter, Image } from "@heroui/react";
// import Image from 'next/image';

import GetStartedBtn from "@/common-components/buttons/get-started";

function MainBanner() {
  const width = "100%";

  return (
    // <Card className='flex flex-col md:flex-row'>
    //   <Image
    //     alt='Card background'
    //     className=''
    //     height={500}
    //     src={image}
    //     width={500}
    //   />

    //   <CardFooter className='relative flex flex-col justify-end items-end p-10'>
    //     <h2 className='w-full text-center  mb-[24px] text-3xl font-light text-gray-600'>
    //       Stand Out.
    //       <span className='text-cyan-500 font-medium ml-1'>Get Hired.</span>
    //     </h2>
    //     <div className='w-full mb-8 banner-text lg:w-[70%] flex items-right justify-stretch text-base/8 text-justify '>
    //       A great resume is more than a document — it’s your first impression,
    //       your pitch, your personal brand. In today’s competitive job market, a
    //       well-crafted resume can be the key to landing the position you truly
    //       deserve. Don’t let opportunities pass you by. Make your resume stand
    //       out.
    //     </div>
    //     <GetStartedBtn />
    //   </CardFooter>
    // </Card>

    <Card
      isFooterBlurred
      className="w-full h-auto col-span-12 sm:col-span-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h2 className="w-full text-center  mb-[24px] text-3xl font-light text-gray-600">
          Stand Out.
          <span className="text-blue-500 font-medium ml-1">Get Hired.</span>
        </h2>
      </CardHeader>
      <Image
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="/home/hr.png"
        width="100%"
        // height="100%"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 flex flex-col">
        <div>
          <p className="h-auto text-black text-sm md:text-lg text-center">
            A great resume is more than a document — it’s your first impression, your pitch, your
            personal brand. Don’t let opportunities pass you by. Make your resume stand out.
          </p>
        </div>
        <div className="mt-4">
          <GetStartedBtn />
        </div>
      </CardFooter>
    </Card>
  );
}

export default MainBanner;
