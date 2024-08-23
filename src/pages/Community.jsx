import React from 'react'
import Container from '../components/Container'
import ComminutyCard from '../components/ComminutyCard'
import img1 from '../images/comminuty-img-1.svg'
import img2 from '../images/comminuty-img-2.svg'
import img3 from '../images/comminuty-img-3.svg'

const Community = () => {
  return (
    <div className='flex justify-center items-center text-center flex-col py-[20px]'>
      <Container>
        <div className="flex flex-col gap-2">
            <h1 className="text-large font-bold text-headline">Manage your entire community in a single system</h1>
            <p className=' text-semimedium font-normal text-paragraph'>Who is Nextcent suitable for?</p>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-[25px]">
            <ComminutyCard img={img1} title={"Membership Organisations"} />
            <ComminutyCard img={img2} title={"National Associations"} />
            <ComminutyCard img={img3} title={"Clubs And Groups"} />
        </div>
      </Container>
    </div>
  )
}

export default Community
