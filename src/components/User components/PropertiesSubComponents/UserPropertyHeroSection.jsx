import React from 'react'
import "../../../styles/User Styles/UserPropertyHeroSection.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";


const UserPropertyHeroSection = () => {
  return (
    <div className="userhero-section ">
    <h1 className='mt-2 fw-bold '>Browse Our Properties</h1>
    <p className='userhero-subtitle'>Find your perfect home among our curated properties. Start <br /> browsing now!</p>
    <div className="search-cover mt-4">
       <div className="search-properties">
         <div className="search-location">
            <span className='discoverfind' >LOCATION</span>
            <input type='text' placeholder='eg. Gbagada' />
         </div>

         <div className="userhero-lines"></div>

         <div className="search-location">
            <span htmlFor="" className='discoverfind'>PROPERTY TYPE</span>
            <input type='text' placeholder='eg. Duplex, Bedroom Flat' />
         </div>

         <div className="userhero-lines"></div>

         <div className="search-bedroom">
            <span className='discoverBed'>BEDROOM</span>
               <div className='addMinus'>
                 <CiCircleMinus/>
                 <span>0</span>
                 <IoIosAddCircleOutline/>
               </div>
         </div>
       </div>
       <button className='userBtn'>Find Property</button>
    </div>
</div>

  )
}

export default UserPropertyHeroSection