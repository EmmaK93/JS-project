import React from 'react'

const TitleSection = ({smallTitle, Title}) => {
  return (
    <div className="section-title">
    <p>{smallTitle}</p>
    <h2>{Title}</h2>
    </div>
  )
}

export default TitleSection