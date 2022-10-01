import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Modal from '../modal'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find the perfect place</h1>
                <p className='search-text'> Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes. </p>
                <div className='md:mt-7 '>
            <Modal title="View Plans"   />
             
            <Modal title="Request"   />
            </div>
            </div>
        </div>
    )
}

export default Hero
