import React from 'react'
import TitleSection from '../Generics/Title/TitleSection'

import './Choose.css'


import img_BeigeBox from '../../Assets/images/Beige-ruta.svg'
import img_WomenTalk from '../../Assets/images/Image3.png'
import ColumnChoose from './ColumnChoose'


const ChooseSection = () => {

    const Column =[
        {icon:"fa-regular fa-thumbs-up", Title:"Process Excellence", text:"Lorem, ipsum dolor sit amet consectetur."},
        {icon:"fa-brands fa-uncharted", Title:"Strategic Planning", text:"Lorem, ipsum dolor sit amet consectetur."},
        {icon:"fa-solid fa-paintbrush", Title:"Experience Design", text:"Lorem, ipsum dolor sit amet consectetur."},
        {icon:"fa-solid fa-robot", Title:"Artificial Inteligence", text:"Lorem, ipsum dolor sit amet consectetur."}
    ]
  return (
    <section className="Choose">
        <img className="background-box" src={img_BeigeBox} alt=""/>
        <div className="container">
            <div className="choose-us">
                <TitleSection smallTitle="Why Choose Us" Title="Why We Are The Best Business Consulting Agency"/>
                
                <div className="column-item">
                    {
                        Column.map((Column, index)=>(
                            <ColumnChoose key={index} icon={Column.icon} Title={Column.Title} text={Column.text}/>
                        )

                        )
                    }
                    

                    
                </div>
                
                
            </div>
            <div>
                <img src={img_WomenTalk} alt="Picture of two women talking"/>
            </div>

        </div>

    </section>
  )
}

export default ChooseSection