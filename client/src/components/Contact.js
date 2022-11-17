import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    send(
      'service_zma9qzm',
      'template_b7bi61y',
      toSend,
      'andvVFNKwMuDuNLGU'
    )
      .then((response) => {
        console.log('email submitted', response.status, response.text);
      })
      .catch((err) => {
        console.log('email failed', err);
      });
  };

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };
  
  return (
    <div className='contact'>
      <h3>Contact Information</h3>
      <div className='contactInstructions'>
        <p>Please fill out the form below to contact me via email. I can also be reached by phone at 720-202-0206.</p>
      </div>
    <form className='emailForm' onSubmit={onSubmit}>
      <input
        type='text'
        name='from_name'
        placeholder='Your Name'
        value={toSend.from_name}
        onChange={handleChange}
      />
      <input
        type='text'
        name='reply_to'
        placeholder='Your Email'
        value={toSend.reply_to}
        onChange={handleChange}
      />
      <input
        type='text'
        name='message'
        placeholder='Your Message'
        value={toSend.message}
        onChange={handleChange}
        className='messageInput'
      />
      <button type='submit' className='btn btn-primary'>submit</button>
    </form>
    </div>
  )
}

export default Contact