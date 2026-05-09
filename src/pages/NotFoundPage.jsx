import React from 'react'
import Section from '../component/section/Section'
import Container from '../component/section/Container'
import NotFound from "../assets/not_found.png"
import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <Section>
        <Container>
           <div className='my-20'>
            <div className='mx-auto text-center'>
             <h2 className='text-home text-9xl font-bold'>
                404
            </h2>
            <h3 className='text-home text-3xl font-bold mt-4 mb-8'>
                Ops! you've lost your engine.
            </h3>
           </div>
            <div className='mx-auto'>
                <img src={NotFound} alt="Not Found" />
            </div>
            <Link to="/" className=' text-white text-lg font-bold mt-12 mb-8  text-center items-center justify-center flex '>
                <button className='bg-home py-5 px-7.5 flex items-center justify-center gap-2.5 rounded-md cursor-pointer'>
                    Back to Home
                </button>
            </Link>
           </div>
        </Container>
    </Section>
  )
}

export default NotFoundPage