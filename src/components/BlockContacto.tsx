import './BlockContacto.css';
import whatsappIcon from "./../assets/whatsapp-icon.png";
import mailIcon from "./../assets/mail-icon.png";
import instagramIcon from "./../assets/instagram-icon.png";
import facebookIcon from "./../assets/facebook-icon.png";

const BlockContacto = () => {
    return(
        <>
        <div className="block-container">
            <div className="block-section">
                <h2 className='titulo'>Contacto</h2>
                <div>
                    <a href="https://wa.me/17542959722" target='_blank' className='contact-text'><img className='contact-icon' src={whatsappIcon} alt="" /> (+1) 754-295-9722</a>
                    <br />
                    <a href="https://mailto:miamimotorspe@hotmail.com" target='_blank' className='contact-text'><img className='contact-icon' src={mailIcon} alt="" /> miamimotorspe@hotmail.com</a>
                    <br />
                    <a href="https://www.instagram.com/miamimotorsperu/" target='_blank' className='contact-text'><img className='contact-icon' src={instagramIcon} alt="" /> miamimotorsperu</a>
                    <br />
                    <a href="https://www.facebook.com/miamimotorspe" target='_blank' className='contact-text'><img className='contact-icon' src={facebookIcon} alt="" /> Miami Motors Autoparts</a>
                </div>
        </div>
        </div>
        </>
    )
};

export default BlockContacto;