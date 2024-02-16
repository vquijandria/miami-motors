import FormAutos from "../FormAutos";
import Footer from "../Footer";
import './Cotiza.css';
import cotizaImg from '../../assets/cotiza-img.webp';

export const Cotiza = () => {
  return (
    <>
      <h1>Cotiza con Nosotros</h1>
      <div className="cotiza-container">
        <img className="cotizaImg" src={cotizaImg} alt="" />
        <FormAutos />
      </div>
      <Footer />
    </>
  );
};
