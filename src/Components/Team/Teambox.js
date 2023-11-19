import React from 'react'
import { Link } from 'react-router-dom'
import "./Team.css"

const Teambox = ({Image, imgDescription, Title, smallTitle}) => {
  return (
    <Link to="/">
        <div className="person">
            <img src={Image} alt={imgDescription}/>
            <div className="presentation-box">
                <h3>{Title}</h3>
                <p>{smallTitle}</p>
            </div>
        </div>
    </Link>
  )
}

export default Teambox