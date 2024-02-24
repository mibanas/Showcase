import Image from 'next/image'

import photo1  from "@/app/public/images/Vector 1.png"
import lineVector  from "@/app/public/images/header image view.png"

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative">
        <div className="flex justify-center gap-4">
        <div className="flex flex-col flex-1 justify-center mx-60">
          <h1 className="mb-6">Holla! Im</h1>
          <h1 className="text-[#FD5956] text-xl mb-4 font-bold">Justin Vaccaro</h1>
          <h1 className="text-[#000000] text-8xl mb-5 font-bold">Creative <br /> &nbsp;&nbsp;&nbsp;Designer<span className="text-[#FD5956]">.</span></h1>
          <h1 className="mb-4">Since creative designers often interact with creative teams, managers <br /> and clients, they need strong communication skills.</h1>
          <div className="flex mb-5">
            <FaFacebook className="mr-6" size={26}/>
            <AiFillInstagram className="mr-6" size={26}/>
            <SiTwitter className="mr-6" size={26}/>
            <FaLinkedinIn className="mr-6" size={26}/>
          </div>
          <button className="bg-[#FD5956] w-32 h-11 text-white">CV here</button>
        </div>
        <div className="flex-1">
          <Image src={lineVector} alt="header image view" width={500} height={300} /> 
        </div>
      </div>
      <div className='absolute bottom-0 left-96'>
        <Image src={photo1} alt="line" /> 
      </div>
    </div>
  );
}
