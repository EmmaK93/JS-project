import React from 'react'
import { Link } from 'react-router-dom'
import "./Project.css"

const Projectbox = ({image, imgDescription, Title}) => {
  return (
    <>
    <div className="grid-pic">
        <Link to="*" target="_blank"><img src={image} alt={imgDescription}/></Link>
        <h3>{Title}</h3>
        <Link to="*">Read more<i className="fa-solid fa-square-arrow-up-right"></i></Link>
       </div> 
    </>
  )
}

export default Projectbox