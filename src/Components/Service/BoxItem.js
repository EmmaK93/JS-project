import React from 'react'

const BoxItem = ({Title, text, url}) => {
  return (
    <box className="boxitem"> 
        <h3>{Title}</h3>
        <p>{text}</p>
        <a href={url} target="_blank"><botton className="Btn-arrow"><i className="fa-solid fa-arrow-right"></i></botton></a>
    </box>
  )
}

export default BoxItem