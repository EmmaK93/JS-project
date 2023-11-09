import React from 'react'

const ButtonBlack = ({Title, url}) => {
  return (
    <a href={url} target="_blank">
        <button class="Btn-black">{Title}<i class="fa-solid fa-square-arrow-up-right"></i></button>
    </a>
  )
}

export default ButtonBlack