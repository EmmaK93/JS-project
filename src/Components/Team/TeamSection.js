import React from 'react'

import './Team.css'
import '../Generics/Buttons/Buttons.css'
import '../Generics/Title/Title.css'

import img_Kris from '../../Assets/images/Kris.png'
import img_Mark from '../../Assets/images/Mark.png'
import img_Kimb from '../../Assets/images/Kimb.png'
import img_Justine from '../../Assets/images/Justine.png'


const TeamSection = () => {
  return (
    <section className="Team">
        <div className="container">
            <div className="team-start">
                <div className="section-title">
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>
                <div>
                    <a href="#" target="_blank">
                    <button className="Btn-trans">Browse Team<i className="fa-solid fa-square-arrow-up-right"></i></button>
                    </a>
                </div>
            </div>
            <div className="presentation">
                <a href="#">
                <div className="person">
                    <img src={img_Kris} alt="Picture of chef operation officer"/>
                    <div className="presentation-box">
                        <h3>Kristine Palmer</h3>
                        <p>Chef Operation Officer</p>
                    </div>
                </div>
                </a>
                <a href="#">
                <div className="person">
                    <img src={img_Mark} alt="Picture of senior consultant"/>
                    <div className="presentation-box">
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                </div>
                </a>
                <a href="#">
                <div className="person">
                    <img src={img_Kimb} alt="Picture of senior consultant"/>
                    <div className="presentation-box">
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                    </div>
                </div>
                </a>
                <a href="#">
                <div className="person">
                    <img src={img_Justine} alt="Picture of senior tech consultant"/>
                    <div className="presentation-box">
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                    </div>
                </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default TeamSection