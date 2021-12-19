import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
    return (
  

        <article>  
          <h1>Contact Me</h1>
          <form name='contact' action='/contact' method='post'>
          <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required className='form-input'/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required className='form-input' />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required className='form-input' rows='7' />
      </div>
      <button type="submit" className='contact-btn'>Send</button>
    </form>
      
      </article>
    );
  };

  export default Contact;

