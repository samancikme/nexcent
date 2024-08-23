import { BsArrowRight } from "react-icons/bs"; 
import React from 'react'
import Container from '../components/Container'
import img from '../images/brand-img.svg'
import img1 from '../images/icons/Logo-1.svg'
import img2 from '../images/icons/Logo-2.svg'
import img3 from '../images/icons/Logo-3.svg'
import img4 from '../images/icons/Logo-4.svg'
import img5 from '../images/icons/Logo-5.svg'
import img6 from '../images/icons/Logo-6.svg'
import Button from '../components/Button'

const Brand = () => {
  return (
    <div className="py-[20px]">
      <Container  className="flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-[30%] w-[100%] flex justify-center items-center">
            <img src={img} alt="" />
        </div>
        <div className="lg:w-[70%] w-[100%] flex flex-col justify-center gap-5">
            <div className=''>
                <p className="text-semimedium font-normal text-paragraph">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
            </div>
            <div className=''>
                <h1 className=' text-semimedium text-prymgreen font-bold'>Tim Smith</h1>
                <p className='text-semimedium font-normal text-paragraph'>British Dragon Boat Racing Association</p>
            </div>
            <div className=' flex flex-col lg:flex-row justify-between items-center gap-4'>
                <div className="flex justify-between items-center lg:w-[60%] w-[100%]">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>
                <div className="lg:w-[40%] w-[100%] justify-center flex">
                    <Button type="outline">
                        <span>Meet all customers</span>
                        <BsArrowRight />
                    </Button>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Brand
