import React from 'react'
import './News.css'
import '../Buttons/Buttons.css'
import '../Title/Title.css'

import img_GreyLines from '../../Assets/images/grey-line.svg'


const NewSection = () => {
  return (
    <section className="News">
            <img className="background-lines" src={img_GreyLines} alt="scirble"/>
        <div className="container">
            <div>
                <h2>Get News Updates By Signup</h2>
            </div>
            <div>
                <input type="text"/>
                <a href="#" target="_blank">
                <button className="Btn-yellow">Subscribe<i className="fa-solid fa-square-arrow-up-right"></i></button>
                </a>
            </div>
        </div>

        </section>

  )
}

export default NewSection