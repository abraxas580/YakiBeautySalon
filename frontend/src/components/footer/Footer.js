import React from 'react'
import './footer.css'
import { FaBeer } from 'react-icons/fa';

const Footer = () => {
     return (
          <footer>
               <div className='container-icons'>
                    <ul>
                         <li><FaBeer/></li>
                         <li></li>
                         <li></li>
                         <li></li>
                    </ul>
               </div>
               
               <div className='container-information'>
                    <div className='about'>
                         <ul>
                              <p>
                                   Texto de referencia para indicar que existe un texto
                                   mamalon para describir que sucede en esta wea
                              </p>
                         </ul>
                    </div>

                    <div className='contacts'>
                         <ul>
                              <li>
                                   Pais
                              </li>

                              <li>
                                   Ubicacion
                              </li>

                              <li>
                                   Telefono
                              </li>

                              <li>
                                   Correo electronico
                              </li>
                         </ul>
                    </div>

                    <div className='SocialMedia'>
                         <ul>

                         </ul>
                    </div>
               </div>
          </footer>
     )
}

export default Footer