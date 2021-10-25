import React from 'react';
import eCommerce from "../images/13-orm-homework-demo-02.gif";
import whatsCookin from "../images/WhatsCookin.png";
import creativeWeb from "../images/creativeWeb.jpg";
import spaceOdyssey from "../images/SpaceOdyssey.PNG";


const Portfolio = () => {
    return (
       <div className="portfolio-wrapper">
           <div className="container">
               <h1 className="text-uppercase text-center py-5">Portfolio</h1>
               <div className="image-box-wrapper row justify-content-center">
                   <div className="portfolio-image-box">
                   <img className="portfolio-img" src={eCommerce} alt="e-commerce"/>
                   </div>
                   {/*  */}
                   <div className="portfolio-image-box">
                   <img className="portfolio-img" src={whatsCookin} alt="whats-cookin"/>
                   </div>
                   {/*  */}
                   <div className="portfolio-image-box">
                   <img className="portfolio-img" src={creativeWeb} alt="creative-web"/>
                   </div>
                   {/*  */}
                   <div className="portfolio-image-box">
                   <img className="portfolio-img" src={spaceOdyssey} alt="sapce-odyssey"/>
                   </div>
                   </div>
                   </div>
           </div>
    )
}
export default Portfolio;
