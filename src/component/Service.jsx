import React from 'react'
import Section from './section/Section';
import Container from './section/Container';
import SectionHeader from './section/SectionHeader';

const Service = () => {
  return (
    <Section>
        <Container>
            <div className="">
                <SectionHeader 
                className="flex flex-col text-center items-center justify-center pb-15"
                subtitle="Our services"
                title="Trust us with your repair needs Repairing with care"
                />
            </div>
        </Container>
    </Section>
  )
}

export default Service