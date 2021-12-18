import React, { useState } from 'react';

const Contact = () => {

    return (
  

        <article>  
          <h1>Contact Me</h1>
          <form
    name="simpleContactForm"
    method="POST"
    data-netlify="true"
    data-netlify-recaptcha="true"
    id="simple-contact-form"
    class="contact-form"
>
    <p class="form-row">
        <label id="contact-form-name-label" for="contact-form-name" class="form-label">Name</label>
        <input type="text" name="name" id="contact-form-name" aria-labelledby="contact-form-name-label" class="form-input" />
    </p>
    <p class="form-row">
        <label id="contact-form-email-label" for="contact-form-email" class="form-label">Email address</label>
        <input type="email" name="email" id="contact-form-email" aria-labelledby="contact-form-email-label" class="form-input" />
    </p>
    <p class="form-row">
        <label id="contact-form-message-label" for="contact-form-message" class="form-label">Message</label>
        <textarea
            name="message"
            id="contact-form-message"
            aria-labelledby="contact-form-message-label"
            class="form-textarea"
            rows="7"
        ></textarea>
    </p>
    <div data-netlify-recaptcha="true" class="form-row"></div>
    <p class="form-row form-submit">
        <button type="submit" class="button">Send</button>
    </p>
</form>
      
      </article>
    );
  };

  export default Contact;

