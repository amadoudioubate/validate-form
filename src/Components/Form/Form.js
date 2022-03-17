import React, { useState } from 'react';
import './Form.css';

function Form() {
    const intialValues = { username: "",
                           email: "",
                           password: ""
                         };
    const [formValues, setFormValues] = useState(intialValues);
  return (
    <div className="container-form">
        <form className='form'>
            <div className="form-title">Connexion</div>
            <div className="form-tited"></div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                />
            </div>
            <button className="btn-sign-up">
                Inscription
            </button>
        </form>
    </div>
  )
}

export default Form;