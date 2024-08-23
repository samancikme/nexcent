import { BsArrowRight } from "react-icons/bs"; 
import React from 'react'
import Button from './Button'

const MarketingCard = ({img , p}) => {
  return (
    <div className=' h-[250px] relative flex justify-center  rounded-lg'>
      <div className=" flex justify-center items-center">
        <img src={img} alt="" />
      </div>
      <div className="mb-[40px] flex-grow basis-[250px] shadow-lg flex justify-between p-2 items-center flex-col text-center w-[90%] absolute bottom-[-60px] rounded-lg bg-white">
        <p className="text-semimedium font-normal text-paragraph leading-[25px]">{p}</p>
        <div className="w-[100%]">
            <Button type={"outline"} className={"w-[100%]"}>
                <span>Read More</span>
                <BsArrowRight />
            </Button>
        </div>
      </div>
    </div>
  )
}

export default MarketingCard
