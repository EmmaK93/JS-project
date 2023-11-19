import React from 'react'
import BoxItem from './BoxItem'
import TitleSection from '../Generics/Title/TitleSection'
import Button from '../Generics/Buttons/Button'

import './Service.css'


import img_BackgroundLinesWhite from '../../Assets/images/vita-linjer.svg'



const ServiceSection = () => {
  return (
    <section className="Service">
        <img className="background-lines"src={img_BackgroundLinesWhite} alt=""/>
        <div className="container">
                <TitleSection smallTitle="Our Services" Title="We Provide The Best Service For Consulting"/>
            <div className="boxtext">
                
                <BoxItem Title= "Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/"/>
                <BoxItem Title= "Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/"/>
                <BoxItem Title= "Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/"/>
                <BoxItem Title= "Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/"/>
                
            </div>
            <div className="Btn-sec">
                <Button type="Trans" Title="Browse Services" url="/Services/Browseservices"/>
            </div>
            
        </div>
    </section>
  )
}

export default ServiceSection