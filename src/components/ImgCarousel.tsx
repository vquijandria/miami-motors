import Carousel from 'react-bootstrap/Carousel';
import './ImgCarousel.css'
import Imagen1 from '../assets/about1.webp'
import Imagen2 from '../assets/about2.webp'
import Imagen3 from '../assets/about3.webp'
import Imagen4 from '../assets/about4.webp'

function CarouselFadeExample() {
  return (
    <Carousel fade className='carousel'>
      <Carousel.Item className='carousel-item'>
        <img src={Imagen1} className='img-carousel' alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Imagen2} className='img-carousel' alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Imagen3} className='img-carousel' alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Imagen4} className='img-carousel' alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;