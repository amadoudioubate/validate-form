import React, { useState } from 'react';
import './Form.css';

function Form() {
    const intialValues = { username: "",
                           email: "",
                           password: ""
                         };
    const [formValues, setFormValues] = useState(intialValues);
    console.log(formValues);

    const handleChange = (e) => { 
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormValues({...formValues, [name]:value})
    }

    const handleSubmit = (e) => {
        console.log(e.target.value);
    }
 
    return (
    <div className="container-form">
        <form className='form' onSubmit={handleSubmit}>
            <div className="form-title">Connexion</div>
            <div className="form-tited"></div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                  value={formValues.username}
                  onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formValues.email}
                  onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  value={formValues.password}
                  onChange={handleChange}
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