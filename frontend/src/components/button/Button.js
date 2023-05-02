const Button = ({buttonClass, textClass, text }) => {
     return (
          <button className={buttonClass}>
               <p className={textClass}>
                    {text}
               </p>
          </button>
     )
}

export default Button