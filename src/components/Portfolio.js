import React from 'react';
import eCommerce from "../images/commerce.PNG";
import whatsCookin from "../images/WhatsCookin.png";
import creativeWeb from "../images/create.jpg";
import spaceOdyssey from "../images/SpaceOdyssey.PNG";



const Portfolio = () => {

    return (
        <section id="portfolio">
       <div className="portfolio-wrapper">
           <div className="container">
               <h1 className="text-uppercase text-center py-5">Portfolio</h1>
               <div className="image-box-wrapper row justify-content-center">
                   <div className="portfolio-image-box">
                   <img className="portfolio-img" src={eCommerce} alt="e-commerce"/>
                   <div className="overflow"></div>
                   </div>
                   {/*  */}
                   <div className="portfolio-image-box">
                   <img className="portfolio-img" src={whatsCookin} alt="whats-cookin"/>
                   <div className="overflow"></div>
                   </div>
                   {/*  */}
                   <div className="portfolio-image-box">
                   <img className="portfolio-img" src={creativeWeb} alt="creative-web"/>
                   <div className="overflow"></div>
                   </div>
                   {/*  */}
                   <div className="portfolio-image-box">
                   <img className="portfolio-img" src={spaceOdyssey} alt="space-odyssey"/>
                   <div className="overflow"></div>
                   </div>
                   </div>
                   </div>
           </div>
    </section>
    )
}
export default Portfolio;
