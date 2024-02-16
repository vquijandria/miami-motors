import './About.css';
import CarouselFadeExample from '../ImgCarousel';
import Footer from '../Footer';

export const About = () => {
  return (
    <>
    <div className='about-container'>
      <h1 color=''>Sobre Nosotros</h1>
      <div className='content-container'>
        <CarouselFadeExample/>
        <div className='text-container'>
        <p className='texto'>En Miami Motors, nos dedicamos a proporcionar una extensa selección de repuestos para una variedad de marcas de vehículos. Desde componentes de motor hasta sistemas de frenos y accesorios, nos especializamos en satisfacer tus necesidades automotrices específicas.
       Cotiza con nosotros a través de nuestra plataforma en línea, donde encontrarás productos de primera calidad para mantener tu vehículo en condiciones óptimas. Con envíos disponibles a lo largo y ancho del Perú, te ofrecemos la conveniencia de recibir tus repuestos directamente en la puerta de tu casa.
      ¿Necesitas ayuda para encontrar la pieza exacta que necesitas o tienes consultas sobre el mantenimiento de tu vehículo? Contáctanos en la sección de Contacto o a través de cualquiera de nuestros canales de comunicación. En Miami Motors, no solo nos esforzamos por ofrecer productos de alta calidad, sino también por brindarte asesoramiento experto para garantizar una experiencia automotriz sin preocupaciones.
      </p>
      </div>
      </div>
    </div>
    <Footer />
    </>
  );
};
