import React from 'react'
import Header from '../Components/Header/Header'
import FooterSection from '../Components/Footer/FooterSection'

const Contact = () => {
  return (
    <>
    <Header/>
    <main>
    <section class="container">
            <div>
                <a href="/index.html"> Home</a>
                <a href="/contact.html">Contact</a>
            </div>
            <div>   
                <h1>Let's Connect</h1>
            </div>
        </section>
        <section class="container">
            <div class="contact-box">
                <div class= "box">
                    <div>
                        <i class="fa-solid fa-location-dot"></i> <h3>Visit us</h3>
                    </div>
                    <p> Sveavägen 31 <br/>
                        111 34 Stockholm</p>
                </div>
                <div class= "box">
                    <div>
                        <i class="fa-solid fa-phone"></i><h3>Call us</h3>
                    </div>
                    <p> +46 (8) 121 470 50 <br/>
                        +46 (8) 121 470 51</p>
                </div>
                <div class= "box">
                    <div>
                    <i class="fa-solid fa-envelope"></i><h3>Email us</h3>
                    </div>
                    <p> info@crito.com <br/>
                        support@crito.com</p>
                </div>
            </div>

        </section>
        <section class="container form-input">
            <h2>Leave us a message for any information.</h2>
           
            <form class="forms" onsubmit="register(event)" method="post" novalidate>
                <div class="mb-5">
                    <input id="firstName" class="info-form" type="text" placeholder="Förnamn..." required onkeyup="validate(this)"/>
                    <span id="warning.firstName"></span> 
                </div>
                <div class="mb-5">
                    <input id="lastName" class="info-form" type="text" placeholder="Efternamn..." required onkeyup="validate(this)"/>
                    <span id="warning.lastName"></span> 
                </div>
                <div class="mb-5">
                    <input id="email" class="info-form" type="email" placeholder="Email..." required onkeyup="validate(this)"/>
                    <span id="warning.email"></span>
                </div>
                <div class="mb-5">
                    <input id="phone" class="info-form" type="number" placeholder="Telefonnummer..." required onkeyup="validate(this)"/>
                    <span id="warning.phone"></span> 
                </div>
                <div class="mb-5">
                    <input id="passWord" class="info-form" type="password" placeholder="Lösenord..." required onkeyup="validate(this)"/>
                    <span id="warning.passWord">Måste innehålla en liten bokstav, siffra (0-9), specialtecken samt bestå av minst 8 tecken</span> 
                </div>
                <div class="mb-5">
                    <input id="confirm" class="info-form" type="password" placeholder="Bekräfta lösenord..." required data-comparewith="passWord" onkeyup="validate(this)"/>
                    <span id="warning.confirm"></span> 
                </div>
                <div class="mb-5">
                    <input  type="submit" href="#" class= "Btn-yellow submit-btn info-form" />
                </div>
            </form>
                
        </section>
        <section class="container">

</section>


    </main>
    <FooterSection/>
    </>
  )
}

export default Contact