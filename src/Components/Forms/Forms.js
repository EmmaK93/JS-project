import React from 'react'
import './Forms.css'
import Button from '../Generics/Buttons/Button'

const Forms = () => {



  return (
    <>
    <section className="container form-input">
            <h2>Leave us a message for any information.</h2>
        <form className="forms" onsubmit="register(event)" method="post" novalidate>
            <div className="mb-5">
                <input id="firstName" className="info-form" type="text" placeholder="Förnamn..." required onkeyup="validate(this)"/>
                <span id="warning.firstName"></span> 
            </div>
            <div className="mb-5">
                <input id="lastName" className="info-form" type="text" placeholder="Efternamn..." required onkeyup="validate(this)"/>
                <span id="warning.lastName"></span> 
            </div>
            <div className="mb-5">
                <input id="email" className="info-form" type="email" placeholder="Email..." required onkeyup="validate(this)"/>
                <span id="warning.email"></span>
            </div>
            <div className="mb-5">
                <input id="passWord" className="info-form" type="password" placeholder="Lösenord..." required onkeyup="validate(this)"/>
                <span id="warning.passWord">Måste innehålla en liten bokstav, siffra (0-9), specialtecken samt bestå av minst 8 tecken</span> 
            </div>
            <div className="mb-5">
                <input id="confirm" className="info-form" type="password" placeholder="Bekräfta lösenord..." required data-comparewith="passWord" onkeyup="validate(this)"/>
                <span id="warning.confirm"></span> 
            </div>
            <Button type="yellow" Title="Skicka" url="/" id="submit-btn"/>
            
        </form>
    </section>
    </>
  )
}

export default Forms