import React from 'react'

const ButtonTrans = ({Title, url}) => {
  return (
    <a href={url} target="_blank">
        <button className="Btn-trans">{Title}<i className="fa-solid fa-square-arrow-up-right"></i></button>
    </a>
  )
}

export default ButtonTrans