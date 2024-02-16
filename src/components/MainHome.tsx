import mainImg from '../assets/mainImg.webp';
import './MainHome.css';
import Footer from './Footer.tsx';


const MainHome = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Miami Motors Autoparts</h1>
                    </div>
                    <img className='mainImg' src={mainImg} alt="" />
                </div>
            </div>
            <Footer />

        </>
    )
};

export default MainHome