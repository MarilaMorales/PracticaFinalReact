import React from 'react';
import "../Styles/Contact.css";

function ContactForm() {
  return (
<div className="contact-form-containerContact">
      <h2 id='tituloContact'>Contacta con nosotros</h2>
      <form className="contact-formContact">
        <label id='labelContact' htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="nameContact"
          name="name"

          required
        />

        <label id='labelContact' htmlFor="email1">Correo electrónico:</label>
        <input
          type="email"
          id="emailContact"
          name="email"
          required
        />

        <label id='labelContact' htmlFor="message">Mensaje:</label>
        <textarea
          id="messageContact"
          name="message"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};


export default ContactForm;

