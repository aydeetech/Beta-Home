import React, { useState } from "react";
import { useGlobalContext } from "../../../Hooks/useGlobalContext";
import "../../../styles/User Styles/UserFeature.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaBathSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { ImLocation } from "react-icons/im";
import { GrLink } from "react-icons/gr";
import { IoMdVideocam } from "react-icons/io";
import { AiFillPicture } from "react-icons/ai";
import { Link } from "react-router-dom";


const UserFeaturedProperties = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        className: "center",
        centerPadding: "60px",
        // swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              // swipeToSlide: true,
              infinite: true,
              dots: false,
              
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1 ,
              slidesToScroll: 1
            }
          }
        ]
      };
    const { properties } = useGlobalContext();

  // const sliceProperty = properties.slice(0, 6);
      
  return (
    <section className="feature-container py-4 overflow-hidden container  ">

      <div className="UserPropertiesCard-Container pt--lg-5 mt-lg-5">
        <div className=" w-100 mt-lg-5">
         <h2 className="text-start mt-5 d-block ">Feature Properties</h2>
         </div>
       
       <div className="card-cover d-flex overflow-x-scroll gap-3 align-items-center">
       {/* <Slider {...settings}> */}
        {properties.map((property) => {
          const {_id, image, title, price, location, features: { bedroom, bathroom } } = property;
          return (
            <div key={_id}>
              <div className="card border border-white">
                <div className="featured">Featured</div>

                <div className="forSale">For sale</div>
                <div className="properties-image">
                  <img src={image} alt="Properties Image" />
                   <div className="inner-icons">
                    <Link to={`/properties/${_id}`}>
                      <GrLink className="icon" />
                    </Link>
                    <Link to={`/properties/${_id}`}>
                      <IoMdVideocam className="icon" />
                    </Link>
                    <Link to={`/properties/${_id}`}>
                      <AiFillPicture className="icon" />
                    </Link>
                  </div>
                 </div>

                <div className="card-content">
                  <div className="card-title">{title}</div>
                  <div className="location">
                    <ImLocation />
                    <span style={{ marginLeft: "5px" }}>{location}</span>
                  </div>

                  <div className="bed-toilet">
                    <div className="bedroom">
                      <IoBedOutline className="fs-4" />
                      <span>{bedroom} bedrooms </span>
                    </div>

                    <div className="toilet">
                      <LiaBathSolid className="fs-3" />
                      <span>{bathroom} bathrooms</span>
                    </div>
                  </div>

                  <hr />

                  <div className="price-icon">
                    <div className="price difft">
                      <span>{price}</span>
                    </div>

                    <div className="share-like-icons">
                      <HiArrowsRightLeft />
                      <CiShare2 />
                      <CiHeart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
         {/* </Slider>  */}
      </div> 
     
      </div>

    </section>
  )
}

export default UserFeaturedProperties;