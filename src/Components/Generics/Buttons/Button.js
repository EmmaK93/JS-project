import React from 'react'
import './Buttons.css'

const Button = ({type, Title, url}) => {

    const getButton=()=>{

        switch (type){
            case 'yellow':
                return 'Btn-yellow'

            case 'black':
                return 'Btn-black'

            default:
                return 'Btn-trans'

        }
    }
  return (
    <a href={url} target="_blank">
    <button className={getButton()}>{Title}<i className="fa-solid fa-square-arrow-up-right"></i></button>
</a>
  )
}

export default Button