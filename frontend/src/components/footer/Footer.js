import React from 'react'
import './footer.css'
import { RxScissors } from "react-icons/rx";
import { FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
     return (
          <footer>
               <div className='container-footer'>
                    <hr className='line-separation'/>
                    
                    <div className='container-information'>
                         <div className='about'>
                              <li><RxScissors className='icon'/></li>
                              <p>
                                   Texto de referencia para indicar que existe un texto mamalon para describir que sucede en esta wea
                              </p>
                         </div>

                         <div className='contacts'>
                              <ul>
                                   <li><RxScissors className='icon'/></li>
                                   <li>El salvador</li>
                                   <li>Avenida los proceres, calle libertads</li>
                                   <li>503+ 1234-5678</li>
                                   <li>belleza@gmail.com</li>
                              </ul>
                         </div>

                         <div className='social-media'>
                              <ul className='container-icons-media'>
                                   <li><FaFacebookSquare className='icon'/></li>
                                   <li><AiFillInstagram className='icon'/></li>
                                   <li><FaTwitterSquare className='icon'/></li>
                                   <li><FaWhatsappSquare className='icon'/></li>
                              </ul>
                         </div>
                    </div>
               </div>
          </footer>
     )
}

export default Footer