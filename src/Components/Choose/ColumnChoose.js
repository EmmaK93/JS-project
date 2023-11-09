import React from 'react'

const ColumnChoose = ({icon, Title, text}) => {

  return (
    <div className="columni">
        <i className={icon}></i>
        <div className="text-col">
            <h3>{Title}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default ColumnChoose