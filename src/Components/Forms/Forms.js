import React, { useState } from 'react'
import './Forms.css'


const Forms = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError]=useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [message, setMessage] = useState('')
    const [messageError, setMessageError]= useState(false)
    

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
        switch (e.target.id){
            case 'name':
                setName(e.target.value)
                setNameError(validLength(e.target.value))

            break
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateEmail(e.target.value))
            break
            case 'message':
                setMessage(e.target.value)
                setMessageError(validLength(e.target.value))
            break

        }


    }

   
    

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const users = {name, email, message}
        const json = JSON.stringify(users)
        
        

        for (let element of e.target){

            switch (element.id){
                case 'name':
                    setName(element.value)
                    setNameError(validLength(element.value))
                break
                case 'email':
                    setEmail(element.value)
                    setEmailError(validateEmail(element.value))
                break
                case 'message':
                setMessage(element.value)
                setMessageError(validLength(element.value))
            break
    
            }

        }
     

        if (!nameError && !emailError && !messageError){

            const result= await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
                }, [])
            
        if (result.status ===200)
            alert('200 ok')
        
        else if(result.status===201)
                console.log('Ny användare registrerad')

        else if(result.status===400)
            console.log('Något gick fel')
            
        else if(result.status===409)
                console.log('Problem 409, användare finns redan')
            
        else
            console.log(`Något gick fel. Felmeddelandet är ${await result.text()}`)
    
        
        
        }


    }

  return (
    <>
    <section className="container form-input">
            <h2>Leave us a message for any information.</h2>
        <form className="forms" onSubmit={handleSubmit} noValidate>
            <div className="mb-5">
                <label className={`${nameError ? 'error':''}`}>{`${nameError ? 'För- och efternamn måste anges':''}`}</label>
                <input id="name" name="name" className="info-form" type="text"  placeholder="För- och efternamn..." required value={name} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="mb-5">
                <label className={`${emailError ? 'error':''}`}>{`${emailError ? 'E-postadress måste vara giltig':''}`}</label>
                <input id="email" name="email" className="info-form" type="email" placeholder="E-post..." required value={email} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="mb-5">
                <label className={`${messageError ? 'error':''}`}>{`${messageError ? 'Meddelande måste innehålla minst 2 tecken':''}`}</label>
                <input id="message" name="message" className="info-form" type="text" placeholder="Meddelande..." required value={message} onChange={(e)=>handleChange(e)}/>
            </div>
           <div className='mb-5'>
            <button id="submit-btn" type="submit" className="info-form" required>Skicka</button>
            </div>
        </form>
    </section>
    </>
  )
}

export default Forms