import React from "react";
import { useState } from "react";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const regex = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,3})$/;
        return regex.test(String(email).toLowerCase())
    };

    const nameInput = (val) => {
        setName(val);
        setNameError(val.trim() === '' ? 'Please enter your name.' : '')
    };

    const emailInput = (val) => {
        setEmail(val);
        if (val.trim() === '') {
            setEmailError('Please enter your email.')
        } else if (!validateEmail(val)) {
            setEmailError('Invalid email.')
        } else {
            setEmailError('')
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', name, email, message)
    };

    return (
        <form onSubmit={formSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => nameInput(e.target.value)}
                />
                {nameError}
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                type='text'
                id='email'
                value={email}
                onChange={(e) => emailInput(e.target.value)}
                />
                {emailError}
            </div>
            <div>
                <label htmlFor='message'>Message</label>
                <input
                type='text'
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button type='submit' disabled={nameError || emailError}>
                Submit Form
            </button>
        </form>
    )
}

export default ContactForm;