import { useState, useRef, FormEvent } from 'react';
import './FormContact.css'; // Asegúrate de tener el archivo de estilos correspondiente
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_boffcg4', 'template_5z2dnbd', form.current, 'DtPcABmq46V7LARs0')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
    clearForm();
    toast.success('Mensaje enviado correctamente. ¡Nos pondremos en contacto contigo lo antes posible!');
  };

  const clearForm = () => {
    setName('');
    setNumber('');
    setEmail('');
    setMessage('');
  }
  return (
    <div>
      <form className='form-container' ref={form} onSubmit={sendEmail}>
        <label className='label' htmlFor="name">Nombre Completo:</label>
        <input
          className='input'
          type="text"
          name='nombre'
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className='label'>Numero de Celular:</label>
        <input
         type="text" 
         className='input' 
         id='number' 
         value={number}
         name='numero'
         onChange={(e) => setNumber(e.target.value)}
        />
        <label className='label' htmlFor="email">Correo Electrónico:</label>
        <input
          className='input'
          type="email"
          name='email'
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className='label' htmlFor="message">Mensaje:</label>
        <textarea
          className='input'
          name='message'
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button className='submit-button' type="submit">Enviar</button>
        </form>
    </div>
  );
};

export default FormContact;
