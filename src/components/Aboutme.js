import React from "react";
import author from "../EverMedinaPortrait.jpg"


const Aboutme = () => {
    return (
      <section id="aboutMe">
        <div className="container py-5">
          <div className="row">
           <div className ="col-lg-6 col-xm-12">
             <div className="photo-wrap">
             <img className="profile-img" src= {author} alt="author..."/>
             </div>
           </div>
           <div className ="col-lg-6 col-xm-12">
             <h1 className ="about-heading">About Me</h1>
             <p>My Name is Ever Medina. I graduated from Cal Poly Pomona in 2017 with a degree in Business
                    Administration.
                    This year I decided it was time for a career change so i enrolled in the coding bootcamp at UCR.
                    My interest in coding began in the early social media days of Myspace where you were able to create unique pages by modifying code.
                    I feel that I am a good fit for a career in coding because I have a passion for problem solving and
                    creating
                    solutions. My goal after bootcamp is to become a full stack developer and be challenged every day in
                    my
                    new role. On my free time i enjoy hiking,travel and finding new spots to eat.
                    I currently reside in Fontana with my wife, daughter and 2 dogs.
            </p>
           </div>
          </div>
        </div>
        </section>
    )
  }
export default Aboutme;