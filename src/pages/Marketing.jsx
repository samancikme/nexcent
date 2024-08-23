import React from 'react'
import Container from '../components/Container'
import img1 from '../images/marketing-img1.svg'
import img2 from '../images/marketing-img2.svg'
import img3 from '../images/marketing-img3.svg'
import MarketingCard from '../components/MarketingCard'

const Marketing = () => {
  return (
    <div className='py-[20px]'>
      <Container>
        <div className="flex justify-center flex-col items-center text-center gap-3">
            <h1 className="text-large font-bold text-headline">Caring is the new marketing</h1>
            <p className="text-semimedium font-normal text-paragraph w-[70%]">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
        <div className="flex lg:justify-between justify-center gap-4 lg:gap-[50px] items-center flex-wrap">
            <MarketingCard img={img1} p={"Creating Streamlined Safeguarding Processes with OneRen"}/>
            <MarketingCard img={img2} p={"What are your safeguarding responsibilities and how can you manage them?"}/>
            <MarketingCard img={img3} p={"Revamping the Membership Model with Triathlon Australia"}/>
        </div>
      </Container>
    </div>
  )
}

export default Marketing
