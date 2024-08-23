import React from 'react'
import Container from './Container'
import Button from './Button'

const NearSections = ({img , title , p }) => {
  return (
    <div className='flex justify-between items-center py-[50px]'>
      <Container className={"flex justify-center items-center"}>
        <div className="flex-1  justify-center items-center hidden md:flex">
            <img src={img} alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-center  text-center md:text-start gap-4">
            <h1 className="text-large font-bold text-headline">{title}</h1>
            <p className="text-semimedium font-normal text-paragraph">{p}</p>
        <div className='w-full justify-center md:justify-start flex '>
            <Button>
                <span>Learn More</span>
            </Button>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default NearSections
