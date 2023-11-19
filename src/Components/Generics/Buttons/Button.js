import React from 'react'
import './Buttons.css'
import { Link } from 'react-router-dom'

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
    <Link to={url} target="_blank">
    <button className={getButton()}>{Title}<i className="fa-solid fa-square-arrow-up-right"></i></button>
</Link>
  )
}

export default Button