import React from 'react'
import Container from '../components/Container'
import img from '../images/question-img.svg'
import NearSections from '../components/NearSections'

const Question = () => {
  return (
    <div>
      <Container>
        <NearSections img={img} title={'The unseen of spending three years at Pixelgrade'} p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'}/>
      </Container>
    </div>
  )
}

export default Question
