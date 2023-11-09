import React from 'react'

const GridItem = ({Title, smallTitle, url}) => {
  return (
    <a href={url} target="_blank">
                <div className="grid-item">
                    <i className="fa-regular fa-handshake"></i>
                    <h3>{Title}</h3>
                    <p>{smallTitle}</p>
                </div>
            </a>
  )
}

export default GridItem