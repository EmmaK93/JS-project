import React from 'react'
import { Link } from 'react-router-dom'

const BoxItem = ({Title, text, url}) => {
  return (
    <div className="boxitem"> 
        <h3>{Title}</h3>
        <p>{text}</p>
        <Link to={url} target="_blank"><button className="Btn-arrow"><i className="fa-solid fa-arrow-right"></i></button></Link>
    </div>
  )
}

export default BoxItem