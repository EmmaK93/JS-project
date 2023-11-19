import React from 'react'
import { Link } from 'react-router-dom'

const Articlebox = ({picture, picDescription, smallTitle, Title, description}) => {
  return (
    <Link to="*">
        <div className="art-box">
            <img src={picture} alt={picDescription}/>
            <p className="art-title">{smallTitle}</p>
            <h3>{Title}</h3>
            <p>{description}</p>
        </div>
    </Link>
  )
}

export default Articlebox