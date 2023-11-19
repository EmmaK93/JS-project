import React from 'react'
import TitleSection from '../Generics/Title/TitleSection'
import Button from '../Generics/Buttons/Button'

import './Team.css'


import img_kris from "../../Assets/images/Kris.png"
import img_Mark from '../../Assets/images/Mark.png'
import img_Kimb from '../../Assets/images/Kimb.png'
import img_Justine from '../../Assets/images/Justine.png'
import Teambox from './Teambox'



const TeamSection = () => {
  return (
    <section className="Team">
        <div className="container">
            <div className="team-start">
                <TitleSection smallTitle="Meet Our Team" Title="Experience Team Members"/>
                <div>
                    <Button type="Trans" Title="Browse Team" url="/Team/Teammembers"/>
                </div>
            </div>
            <div className="presentation">

                <Teambox Image={img_kris} imgDescription="Picture of chef operation officer" Title="Kristine Palmer" smallTitle="Chef Operation Officer"/>
                <Teambox Image={img_Mark} imgDescription="Picture of senior consultant" Title="Mark Aubri" smallTitle="Senior Consultant"/>
                <Teambox Image={img_Kimb} imgDescription="Picture of senior consultant" Title="Kimberly Hansen" smallTitle="Senior Consultant"/>
                <Teambox Image={img_Justine} imgDescription="Picture of senior tech consultant" Title="Justin Willoman" smallTitle="Senior Tech Consultant"/>
                
            </div>
        </div>
    </section>
  )
}

export default TeamSection