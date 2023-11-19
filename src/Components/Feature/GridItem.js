import React from 'react'
import "./Feature.css"
import { Link } from 'react-router-dom'

const GridItem = ({Title, smallTitle, url, icon}) => {
  return (
    
    <Link to={url} target="_blank">
                <div className="grid-item">
                    <i className={icon}></i>
                    <h3>{Title}</h3>
                    <p>{smallTitle}</p>
                </div>
            </Link>
            
  )
}

export default GridItem