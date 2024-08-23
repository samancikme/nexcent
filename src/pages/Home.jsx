import { TbPointFilled } from "react-icons/tb"
import React from 'react'
import homeImage from "../images/home-img.svg"
import Container from '../components/Container'
import Button from '../components/Button'

const Home = () => {
    return (
        <div className=' bg-silver w-[100%] h-[calc(100vh-86px)] flex justify-center items-center flex-col relative' >
            <Container>
                <div className=" flex justify-between items-center text-center md:text-start flex-col-reverse md:flex-row">
                    <div className=" flex-1 flex flex-col gap-5">
                        <h1 className='md:text-title text-[40px] font-semibold leading-[55px]'>
                            Lessons and insights
                            <span className='text-prymgreen'>   from 8 years</span>
                        </h1>
                        <p className='text-small'>Where to grow your business as a photographer: site or social media?</p>
                        <div className=" flex md:justify-start justify-center md:mt-[20px] mt-[10px]">
                            <Button>
                                <span>Register</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center  flex-1">
                        <img src={homeImage} alt="" />
                    </div>
                </div>
            </Container>
            <div className=" flex justify-center items-center gap-2 absolute md:bottom-8 bottom-0 text-gray-600 text-medium">
                <TbPointFilled className="text-prymgreen" />
                <TbPointFilled />
                <TbPointFilled />
            </div>
        </div>
    )
}

export default Home
