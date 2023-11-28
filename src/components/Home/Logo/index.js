import './index.scss';
import LogoImage from '../../../assets/images/logo-image.png'

const Logo = () => {
    
    return (
        <div className='logo-container'>
            <img className='logoImage' src={LogoImage} alt="Logo"></img>
        </div>
    )
}

export default Logo