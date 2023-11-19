import React from 'react'
import TitleSection from '../Generics/Title/TitleSection'
import Button from '../Generics/Buttons/Button'

import './Article.css'



import img_art1 from '../../Assets/images/art.1.png'
import img_art2 from '../../Assets/images/art.2.png'
import img_art3 from '../../Assets/images/art.3.png'
import Articlebox from './Articlebox'


const ArticleSection = () => {
  return (
    <section className="article">
            <div className="container">
                <div className="Art-start">
                    <TitleSection smallTitle="Article & News" Title="Get Every Single Articles & News"/>
                    
                    <div>
                        <Button type="Trans" Title="Browse Articles" url="/"/>
                    </div>

                </div>
                <div className="art-menu">

                    <Articlebox picture={img_art1} picDescription="Picture of a business woman" smallTitle="Business" Title="How To Use Digitalization In The Classroom" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
                    <Articlebox picture={img_art2} picDescription="picture of a calender" smallTitle="Business" Title="How To Implement Chat GPT In Your Projects" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
                    <Articlebox picture={img_art3} picDescription="Picture of two books on a table" smallTitle="Business" Title="The Guide To Support Modern CSS Design" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
                    
                </div>
            </div>


        </section>
  )
}

export default ArticleSection