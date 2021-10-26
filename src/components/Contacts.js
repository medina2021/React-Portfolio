import React, {useState} from 'react'
import emailjs from "emailjs-com"

const Contacts = () => {

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID= "user_uTJiCDymd3ltZePLARakr";

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(serviceID, templateID, e.target, userID)
          .then((result) => {
            console.log(result.text);
          }, (error) =>{
              console.log(error.text);
          });
      }

    return (
        <section id="contacts">
 <div className="contacts">
     <div className="text-center">
     <h1>Contact Me</h1>
     <p>Please fill out the form and describe your project request.</p>
     </div>
     <div className="container">
         <div className ="row">
             <div className="col-md-6 col-xs-12">
                 {/* Name */}
                 <input className = "form-control"
                 type="text"
                 placeholder ="Name"
                 name="name"
                 />
                 {/* Phone */}
                 <input className = "form-control"
                 type="text"
                 placeholder ="Phone Number"
                 name="phone"/>
                {/* Email */}
                <input className = "form-control"
                type="email"
                 placeholder ="Email Address"
                 name="email"/>       
                  {/* Subject*/}
                  <input className = "form-control"
                  type="text"
                 placeholder ="Subject"
                 name="subject"/>                              
             </div>
             <div className="col-md-6 col-xs-12">
                   {/* Description*/}
                   <textarea className = "form-control"
                   type="text"
                 placeholder ="Please describe your request"
                 name="description"></textarea>
                 <button className="btn-main-offer contact-btn" type="submit">CONTACT ME</button>               
             </div>
         </div> 
     </div>
 </div>
 </section>
    )
}

export default Contacts
