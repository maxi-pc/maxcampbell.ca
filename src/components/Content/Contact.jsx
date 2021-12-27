import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';



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
  

     <article className='contact'><Slide direction='up' > 
          <h1>Contact Me</h1>
          <form name="contact" method="post" action={"/success"}>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message" rows="7"></textarea></label>
          </p>
          <p>
            <button type="submit" className='contact-btn'>Send</button>
          </p>
        </form>
      </Slide>
      </article>
    );
  };

  export default Contact;

