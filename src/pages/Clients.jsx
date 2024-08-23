import React from 'react'
import Container from '../components/Container'
import img1 from '../images/icons/Logo-1.svg'
import img2 from '../images/icons/Logo-2.svg'
import img3 from '../images/icons/Logo-3.svg'
import img4 from '../images/icons/Logo-4.svg'
import img5 from '../images/icons/Logo-5.svg'
import img6 from '../images/icons/Logo-6.svg'

const Clients = () => {
  return (
    <div className=' text-center py-[30px]'>
      <Container className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
            <h1 className="text-large font-bold text-headline">Our Clients</h1>
            <p className=' text-semimedium font-normal text-paragraph'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='flex justify-between items-center py-[20px] '>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default Clients
