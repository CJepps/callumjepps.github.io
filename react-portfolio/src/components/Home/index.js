import './index.scss'
import { Link } from 'react-router-dom'
import LogoCapital from '../../assets/images/logo-capital-c.png'
const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoCapital} alt="imgae of my initial"></img>
                allum Jepps
                <br />
                Web Developer
                </h1>
                <h2>Fullstack Developer / DJ</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home