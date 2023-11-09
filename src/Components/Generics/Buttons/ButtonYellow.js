import React from 'react'

const ButtonYellow = ({Title, url}) => {
  return (
    <a href={url} target="_blank">
        <button className="Btn-yellow">{Title}<i className="fa-solid fa-square-arrow-up-right"></i></button>
    </a>
  )
}

export default ButtonYellow