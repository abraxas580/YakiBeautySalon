import Button from "../button/Button"
import "./card.css"
import { BsScissors } from 'react-icons/bs';
const Card = ({title, description}) => {
     return (
          <div className="card-container">
               <div className="container-icon">
                    <BsScissors className="icon card"/>
               </div>

               <hr className='line-separation-card'/>

               <div className="container-card-information">
                    <div className="information">
                         <p className="text title">
                              {title}
                         </p>
                         <p className="text description">
                              {description}
                         </p>
                    </div>
                    <div className="card-button-container">
                         <Button buttonClass={"card-button"} textClass={"button-text-card"} text={"See more..."}/>
                    </div>
               </div>
          </div>
     )
}

export default Card