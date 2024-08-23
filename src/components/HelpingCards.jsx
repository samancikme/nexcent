import React from "react"
import Container from "./Container"

const HelpingCards = ({img , title , p}) => {
    return (
    <div className="flex gap-5 items-center flex-grow basis-[190px] lg:basis-[200px]">
        <div className=" flex justify-center items-center">
            <img src={img} alt="" />
        </div>
        <div className=" flex justify-center  flex-col">
            <h1 className="text-large font-bold text-headline">{title}</h1>
            <p className="text-semimedium font-normal text-paragraph">{p}</p>
        </div>
    </div>
    )
}

export default HelpingCards
