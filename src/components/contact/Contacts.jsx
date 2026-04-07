import React, { useState } from 'react'
import style from './Contacts.module.css'
function Contacts() {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    message: ''
  });
  const submitForm = (e) => {
    e.preventDefault();
    console.log(formInput);
  }
  return (
    <div>
        <h1 className={style.title}>Enter Contact Info Below</h1>
        <form onSubmit = {submitForm}>
          <input 
            placeholder="username" 
            className={style.userInput}  
            value={formInput.name} 
            onChange={e => setFormInput({...formInput, name: e.target.value})} 
          />
          <input 
            placeholder="Email"  
            className={style.userInput} 
            value={formInput.email} 
            onChange={e => setFormInput({...formInput, email: e.target.value})}
          />
          <textarea 
            placeholder="Message" 
            className={style.userMsg}
            value={formInput.message} 
            onChange={e => setFormInput({...formInput, message: e.target.value})}
          />
          <button type="submit" className={style.button}>
          Submit Message
          </button>
        </form>
        
    </div>
  )
}

export default Contacts