import React from 'react'
import Button from '../Generics/Buttons/Button'

import './ShowCase.css'

import img_WhiteLines from '../../Assets/images/vit-linje-v.svg'
import img_man from '../../Assets/images/Image.png'



const ShowCaseSection = () => {
  return (
    <section className="showcase">
      <img className="background-lines" src={img_WhiteLines} alt=""/>
        
        <div className="container">
          <div className="content">
            
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            
            <div className="button">
              <Button type="yellow" Title="Get consulting" url="/"/>
              <Button type="Trans" Title="Learn more" url="/"/>
            </div>
          
          </div>
          
          <div className="pic-1">
            <img src={img_man} alt="Picture of a business man"/>
          </div>
        
        </div>    
    
    </section>
  )
}

export default ShowCaseSection