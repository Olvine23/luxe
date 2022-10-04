import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import MyDropdown from '../menu'
import Modal from '../modal'
import Dropdown from './dropdown'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div name="home" className='content'>
                <h1>Welcome To luxelivingairbnbs</h1>
                <p className='search-text'> Our Luxe club connects you to memorable experiences, specially
                curated to attend to your personal, family or corporate needs.{" "} </p>
         <div className='md:mt-7 '>
            <Modal title="Make Request"   />
             <MyDropdown />
            {/* <Modal title="Request"   /> */}
            </div>
            </div>
        </div>
    )
}

export default Hero
