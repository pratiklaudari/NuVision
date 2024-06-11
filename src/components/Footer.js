import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="site-footer" id='contactus'>
      <div class="containerabove">
          <div class="footerabout">
            <h6>About</h6>
            <p class="text-justify">
            NuVision is an exceptionally unique mental health care platform that aims to transform the traditional approach to in-person therapy by revolutionising it. Adopting a technological approach to instantly connect individuals with their own personal licensed therapists and counsellors through secure video, phone, or chat sessions, thus providing convenient and affordable counselling on-demand.
            </p>
          </div>
          <div class="footerservices">
            <h6>Our Services</h6>
            
            <ul class="footer-links ">
              {/* <p className='for'>Therapy for:</p> */}
              <li><a href="#services">Parent and Child</a></li>              
              <li><a href="#services">Teenagers</a></li>
              <li><a href="#services">Adults</a></li>
              
            </ul>
          </div>
          <div class="footerquick">
            <h6>Quick Links</h6>
            <ul class="footer-links">
            <li><a href="#navbar">Home</a></li>
            <li><a href="#aboutus">About Us</a></li>
            {/* <li><a href="#services">Services</a></li> */}
            <li><a href="#howitworks">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>

            <li><a href="#contactus">Contact Us</a></li>
            </ul>

        </div>
       
      </div>
      <hr class="small"/>

      <div class="containerbelow" id="containerbelow">
          <div class="copyrightsection">

              <p class="copyright-text">Copyright©2024 All Rights Reserved 
                <span><a href="#navbar">      NuVision</a></span>
              </p>

            
           
          </div>
        <div class="sociallinksection">
        <ul class="social-icons">

          <li><a class="instagram" href="https://www.instagram.com/__nuvision/"><i class="fab fa-instagram"></i></a></li>
          <li><a class="youtube" href="https://www.youtube.com/@nuvision_2024"><i class="fab fa-youtube"></i></a></li>
          <li><a class="linkedin" href="https://www.linkedin.com/in/nu-vision-474856306/"><i class="fab fa-linkedin-in"></i></a></li>

        </ul>
      </div>
      </div>
      <p className='email'>If you have any queries, feel free to email us at:-
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nuvision2024@gmail.com" target="_blank" rel="noopener noreferrer"> nuvision2024@gmail.com</a>
      </p>
    

      
    </footer>
  )
}

export default Footer