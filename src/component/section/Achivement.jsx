import React from 'react'
import Section from './Section'
import Container from './Container'
import Team from "../../assets/icons/team.png"
import Award from "../../assets/icons/award.png"
import ClientReview from "../../assets/icons/client_review.png"
import Complete_Project from "../../assets/icons/complete_project.png"

const Achivement = () => {
  return (
    <Section className='my-30'>
        <Container>
            <div>
                <div className='flex gap-20.5 justify-between'>
                    <Achivemnetcard 
                        number="200+"
                        title="Team Members"
                        img={Team}
                    />
                    <Achivemnetcard 
                        number="20+"
                        title="Awards Won"
                        img={Award}
                    />
                    <Achivemnetcard 
                        number="10k+"
                        title="Complete Projects"
                        img={Complete_Project}
                    />
                    <Achivemnetcard 
                        number="900+"
                        title="Client Reviews"
                        img={ClientReview}
                    />

                </div>
            </div>
        </Container>
    </Section>
  )
}

export default Achivement



const Achivemnetcard = ({number, title, img}) => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <h3 className='font-titillium text-5xl font-semibold lining-nums'>{number}</h3>
            <div className='size-16.25 pt-5'>
                <img src={img} alt="" className='w-full'/>
            </div>
            <p className='font-archivo text-[16px] pt-10'>{title}</p>
        </div>
    )
}