import React from 'react'

import './Service.css'
import '../Generics/Buttons/Buttons.css'
import '../Generics/Buttons/ButtonYellow'
import '../Generics/Title/Title.css'
import BoxItem from './BoxItem'
import TitleSection from '../Generics/Title/TitleSection'

import img_BackgroundLinesWhite from '../../Assets/images/vita-linjer.svg'
import ButtonTrans from '../Generics/Buttons/ButtonTrans'

const ServiceSection = () => {
  return (
    <section className="Service">
        <img className="background-lines"src={img_BackgroundLinesWhite} alt=""/>
        <div className="container">
                <TitleSection smallTitle="Our Services" Title="We Provide The Best Service For Consulting"/>
            <div className="boxtext">
                
                <BoxItem Title= "Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/Services/Businessadvice"/>
                <BoxItem Title= "Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/Services/Startupbusiness"/>
                <BoxItem Title= "Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/Services/Financialadvice"/>
                <BoxItem Title= "Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/Services/Riskmanagement"/>
                
            </div>
            <div className="Btn-sec">
                <ButtonTrans Title="Browse Services" url="/Services/Browseservices"/>
            </div>
            
        </div>
    </section>
  )
}

export default ServiceSection