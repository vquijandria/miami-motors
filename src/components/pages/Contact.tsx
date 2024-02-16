import './Contact.css';
import BlockContacto from '../BlockContacto';
import Footer from '../Footer';
import FormContact from '../FormContact';


export const Contact = () => {
  return(
    <>
    <div className='contact-container'>
    <h1 id="contact_title">Contactanos</h1>
    <div className='content'>
      <BlockContacto />
      <FormContact />
    </div>
      
    
    </div>
    <Footer />
    </>
  )
};
