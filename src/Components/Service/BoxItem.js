import React from 'react'

const BoxItem = ({Title, text, url}) => {
  return (
    <div className="boxitem"> 
        <h3>{Title}</h3>
        <p>{text}</p>
        <a href={url} target="_blank"><button className="Btn-arrow"><i className="fa-solid fa-arrow-right"></i></button></a>
    </div>
  )
}

export default BoxItem