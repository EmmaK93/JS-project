import React from 'react'
import Button from '../Generics/Buttons/Button'
import './News.css'

import img_WhiteBackgroundLines from '../../Assets/images/vita-linjer.svg'

const NewsSection = () => {
  return (
    <section className="News">
            <img className="background-lines" src={img_WhiteBackgroundLines} alt="scirble"/>
        <div className="container">
            <div>
                <h2>Get News Updates By Signup</h2>
            </div>
            <div>
                <input type="email" placeholder="E-postadress..."/>
                <Button type="yellow" Title="Subscribe" url="/"/>
                
            </div>
        </div>

        </section>

  )
}

export default NewsSection