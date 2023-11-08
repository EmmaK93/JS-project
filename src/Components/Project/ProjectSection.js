import React from 'react'

import './Project.css'
import '../Buttons/Buttons.css'
import '../Title/Title.css'

import img_business1 from '../../Assets/images/imgbusn1.png'
import img_business3 from '../../Assets/images/imgbusn3.png'
import img_business2 from '../../Assets/images/imgbusn2.png'
import img_business4 from '../../Assets/images/imgbusn4.png'

const ProjectSection = () => {
  return (
    <section class="Projects">
    <div class="container">
        <div class="section-title">
            <p>Project & Case Studies</p>
            <h2>Let's Looks Our Global Projects</h2>
        </div>
        <div class="grid-project">
        
            <div class="grid-pic">
                <a href="#" target="_blank"><img src={img_business1} alt="Man reading a newspaper"/></a>
                <h3>Grow your business</h3>
                <a href="#">Read more<i class="fa-solid fa-square-arrow-up-right"></i></a>
                
            </div>
            <div class="grid-pic">
                <a href="#" target="_blank"><img src={img_business3} alt="Picture of office supplies, a notebook, a pen and a mug on a desk"/></a>
                <h3>Educate your employees to get better results</h3>
                <a href="#">Read more<i class="fa-solid fa-square-arrow-up-right"></i></a>

            </div>
            <div class="grid-pic">
                <a href="#" target="_blank"><img src={img_business2} alt="Picture of different communication devices, a tablet and a smart watch. Also a pair of glasses"/></a>
                <h3>Why your client needs a responsive website</h3>
                <a href="#">Read more<i class="fa-solid fa-square-arrow-up-right"></i></a>

            </div>
            <div class="grid-pic">
                <a href="#" target="_blank"><img src={img_business4} alt="Picture of a laptop screen showing business graphs and charts"/></a>
                <h3>Business Insights is a important piece of your business</h3>
                <a href="#">Read more<i class="fa-solid fa-square-arrow-up-right"></i></a>

            </div>
        

        </div>
        <div class="Btn-sec">
            <a href="#" target="_blank">
            <button class="Btn-black">All Recent Projects<i class="fa-solid fa-square-arrow-up-right"></i></button>
            </a>
        </div>
    </div>
</section>
  )
}

export default ProjectSection