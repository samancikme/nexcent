import { TbMenu2 } from "react-icons/tb"; 
import { BsArrowRight } from "react-icons/bs"; 
import React from 'react'
import logo from "../images/icons/logo-header.svg"
import Button from './Button'
import Container from "./Container";

const Header = () => {
  return (
    <div>
        <Container>
        <div className=" flex justify-between items-center py-6 ">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="justify-center items-center flex gap-4">
            <ul className="gap-5 hidden justify-center items-center md:flex">
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
            <div className="hidden sm:flex">
              <Button>
                  <span>Register now</span>
                  <BsArrowRight />
              </Button>
            </div>
            <TbMenu2 className="text-[24px] flex md:hidden" />
          </div>
        </div>
        </Container>
    </div>
  )
}

export default Header
