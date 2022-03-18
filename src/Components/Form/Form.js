import React, { useEffect, useState } from 'react';
import './Form.css';

function Form() {
    const intialValues = { username: "",
                           email: "",
                           password: ""
                         };
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isValid, setIsValid] = useState(false);
    
    console.log(formValues);
    console.log(isValid);

    const handleChange = (e) => { 
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormValues({...formValues, [name]:value})
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    // Envoie du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
 
    // Fonction validation 
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // Test sur le chanmp username
        if(!values.username) { // Si le champ username est vide
            errors.username = " Username est obligatoire";
            setIsValid(false);
        }else {
            setIsValid(true);
        }
        // Test sur le champ email
        if(!values.email) {
            errors.email = " Email est obligatoire ";
            setIsValid(false);
        } else if(!regex.test(values.email)) {
            errors.email = " Email invalide";
            setIsValid(false);
        } else {
            setIsValid(true);
        }
        // Test sur le champ mot de passe
        if(!values.password) {
            errors.password = " Mot de passe est obligatoire";
            setIsValid(false);
        } else if(values.password.length < 4) {
            errors.password = " Mot de passe doit contenir au moins 4 caractères";
            setIsValid(false);
        } else if(values.password.length > 10) {
            errors.password = " Mot de passe ne doit pas depasser 10 caractères";
            setIsValid(false);
        } else {
            setIsValid(true);
        }

        return errors;
    };

    return (
    <div className="container-form">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="success">Vous êtes connecté avec succès</div>
        ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}

        <form className='form' onSubmit={handleSubmit}>
            <div className="form-title">Connexion</div>
            <div className="form-tired"></div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                  type="text" 
                  name="username" 
                  id="username"
                  placeholder='Username' 
                  value={formValues.username}
                  onChange={handleChange}
                />
            </div>
            <p className='errors'>{formErrors.username}</p>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder='Email'
                  value={formValues.email}
                  onChange={handleChange}
                />
            </div>
            <p className='errors'>{formErrors.email}</p>

            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder='Mot de passe'
                  value={formValues.password}
                  onChange={handleChange}
                />
            </div>
            <p className='errors'>{formErrors.password}</p>

            <button className="btn-sign-up">
                Inscription
            </button>
        </form>
    </div>
  )
}

export default Form;