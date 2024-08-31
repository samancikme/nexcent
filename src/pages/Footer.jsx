import { GrSend } from "react-icons/gr"; 
import { BsYoutube } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import { BsGithub } from "react-icons/bs"; 
import { BsInstagram } from "react-icons/bs"; 
import { BsArrowRight } from "react-icons/bs"; 
import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import logo from '../images/icons/logo-footer.svg'

const Footer = () => {  
  return (
    <footer className="mt-[50px] text-[#F5F7FA]">
      <div className="bg-silver">
          <Container>
            <div className="py-7 flex justify-center items-center flex-col gap-5">
                <h1 className="md:text-title text-[40px] font-semibold leading-[55px] text-black">Pellentesque suscipit fringilla libero eu.</h1>
                <div className="">
                    <Button>
                        <span className="">Get a Demo</span>
                        <BsArrowRight />
                    </Button>
                </div>
            </div>
          </Container>
      </div>

      <div className="bg-footer py-8">
        <Container className="flex justify-between items-center flex-col lg:flex-row gap-5 ">
            <div className="flex justify-center text-center lg:text-start lg:items-start items-center gap-5 flex-col md:w-[40%] w-[100%]">
                <div>
                    <img src={logo} alt="" />
                </div>

                <div className=" ">
                    <p className="">Copyright © 2020 Landify UI Kit.</p>
                    <p className="">All rights reserved</p>
                </div>

                <div className=" flex justify-between items-center text-white gap-2 text-medium">
                    <BsInstagram />
                    <BsGithub />
                    <BsFacebook />
                    <BsYoutube />
                </div>
            </div>

            <div className=" flex justify-between items-center w-[100%] lg:w-[60%] flex-col lg:flex-row lg:gap-0 gap-5">
                    <div className="lg:flex-[2] w-[100%] flex justify-between items-center lg:text-start text-center">
                        <nav className="flex-1">
                            <h1 className="text-[24px] font-semibold">Company</h1>
                            <ul className="flex flex-col gap-1">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Testimonials</a></li>
                            </ul>
                        </nav>
                        <nav className="flex-1">
                            <h1 className="text-[24px] font-semibold">Support</h1>
                            <ul className="flex flex-col gap-1">
                                <li><a href="#">Help center</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Legal</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Status</a></li>
                            </ul>
                        </nav>
                    </div>
                <div className=" flex-1 text-center lg:text-start">
                    <label className="text-[24px] font-semibold"> Stay up to date</label>
                    <form className="flex justify-center flex-col relative">
                        <input className="py-1 px-3 rounded-lg" type="text" placeholder="Your email address" />
                        <button className="text-black text-[20px] absolute top-0 right-[10px] bottom-0"><GrSend /></button>
                    </form>
                </div>
            </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
