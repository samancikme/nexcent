import React from 'react'
import img1 from '../images/icons/icon1H.svg'
import img2 from '../images/icons/icon2H.svg'
import img3 from '../images/icons/icon3H.svg'
import img4 from '../images/icons/icon4H.svg'
import Container from '../components/Container'
import HelpingCards from '../components/HelpingCards'

const Helping = () => {
  return (
    <div className=' flex justify-between items-center bg-silver py-[50px]'>
      <Container className={"flex text-center md:text-start justify-between items-center flex-col lg:flex-row"}>
        <div className=" flex-1">
          <h1 className='text-large font-bold text-headline'>Helping a local <span className='text-prymgreen'>business reinvent itself</span></h1>
          <p className="text-semimedium font-normal text-paragraph">We reached here with our hard work and dedication</p>
        </div>
        <div className="lg:flex-1 w-[100%] flex flex-wrap gap-3 justify-center items-center">
          <HelpingCards img={img1} title={"2,245,341"} p={"Members"}/>
          <HelpingCards img={img2} title={"46,328"} p={"Clubs"}/>
          <HelpingCards img={img3} title={"828,867"} p={"Event Bookings"}/>
          <HelpingCards img={img4} title={"1,926,436"} p={"Payments"}/>
        </div>
      </Container>
    </div>
  )
}

export default Helping
