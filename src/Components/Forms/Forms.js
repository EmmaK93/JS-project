import React, { useState } from 'react'
import './Forms.css'


const Forms = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError]=useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage]= useState(false)

    const validLength=(value, minLength=2)=>{
        
        if (value.length <= minLength)
            return true
        return false
    }

    const validateEmail=(value)=>{
    
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(value))
            
            return true
     
         return false
        
        
    }

    const handleChange =(e)=>{
        switch (e.target.type){
            case "text":
                setName(e.target.value)
                setNameError(validLength(e.target.value))

            break
            case "email":
                setEmail(e.target.value)
                setEmailError(validateEmail(e.target.value))
            break

            case "message":
                setMessage(e.target.value)
                setErrorMessage(validLength(e.target.value))
            break
        }


    }

   
    

    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        const user = {name, email, message}
        const json= JSON.stringify(user)
        console.log(json)

        const result= await fetch('https://win23.azurewebsites.net/api/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
        },[])

        

        switch(result.status){
            case 201:
                alert('Användare skapas')
                clearForms()
            break
            case 400:
                console.log (`Felmeddelandet är: ${await result.text()}`)
            break
            default:
                console.log ('Annat fel')
        }

        const clearForms =()=>{
            setName('')
            setEmail('')
            setMessage('')
        }
    }

  return (
    <>
    <section className="container form-input">
            <h2>Leave us a message for any information.</h2>
        <form className="forms" onSubmit={handleSubmit} noValidate>
            <div className="mb-5">
                <label className={`${nameError ? 'error':''}`}> {`${nameError ? 'För- och efternamn måste anges':''}`}</label>
                <input id="name" className="info-form" type="text"  placeholder="För- och efternamn..." required value={name} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="mb-5">
                <label className={`${emailError ? 'error':''}`}>{`${emailError ? 'E-postadress måste vara giltig':''}`}</label>
                <input id="email" className="info-form" type="email" placeholder="Epost..." required value={email} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="mb-5">
                <label className={`${errorMessage ? 'error':''}`}>{`${errorMessage ? 'Meddelande måste innehålla minst 2 tecken':''}`}</label>
                <textarea id="message" className="info-form" type="text"  placeholder="Meddelande..." required value={message} onChange={(e)=>handleChange(e)}></textarea> 
            </div>
           <div className='mb-5'>
            <button id="submit-btn" type="submit"className="info-form" required>Skicka</button>
            </div>
        </form>
    </section>
    </>
  )
}

export default Forms