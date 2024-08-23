import React from 'react'

const ComminutyCard = ({img , title}) => {
  return (
    <div className=' flex flex-col flex-grow basis-[350px] justify-center  items-center p-[15px] text-center gap-[10px] w-[100%]'>
        <img src={img} alt="" />
        <h1 className="text-medium font-bold text-headline">{title}</h1>
        <p className=' text-small font-normal text-paragraph'>Our membership management software provides full automation of membership renewals and payments</p>
    </div>
  )
}

export default ComminutyCard
