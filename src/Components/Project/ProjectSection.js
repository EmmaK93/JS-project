import React from 'react'
import TitleSection from '../Generics/Title/TitleSection'
import Button from '../Generics/Buttons/Button'

import './Project.css'


import img_business1 from '../../Assets/images/imgbusn1.png'
import img_business3 from '../../Assets/images/imgbusn3.png'
import img_business2 from '../../Assets/images/imgbusn2.png'
import img_business4 from '../../Assets/images/imgbusn4.png'
import Projectbox from './Projectbox'




const ProjectSection = () => {


  return (
    <section className="Projects">
    <div className="container">
            <TitleSection smallTitle="Project & Case Studies" Title="Let's Looks Our Global Projects"/>
        <div className="grid-project">
        
            <Projectbox image={img_business1} imgDescription="Man reading a newspaper" Title="Grow your business"/>
            <Projectbox image={img_business3} imgDescription="Picture of office supplies, a notebook, a pen and a mug on a desk" Title="Educate your employees to get better results"/>
            <Projectbox image={img_business2} imgDescription="Picture of different communication devices, a tablet and a smart watch. Also a pair of glasses" Title="Why your client needs a responsive website"/>
            <Projectbox image={img_business4} imgDescription="Picture of a laptop screen showing business graphs and charts" Title="Business Insights is a important piece of your business"/>
            
        </div>

        <div className="Btn-sec">
            <Button type="black" Title="All Recent Projects" url="/Project/Moreprojects"/>
        </div>
    </div>
</section>
  )
}

export default ProjectSection