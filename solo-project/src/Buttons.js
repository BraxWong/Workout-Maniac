import './Buttons.css'
import env_img from './envelope_logo.png'
import ig_logo from './ig_logo.png'
function Buttons() {
    return (
        <div className='buttons'>
            <button className='email_but'>
                <img src= {env_img} alt ="env" className='env' width={20} height = {15}></img>
                <a className='a_email'>Email</a>
            </button>
            <button className='ig_but'>
                <img src={ig_logo} height = {15}></img>
                <a className='a_ig'href='https://www.instagram.com/brax_wls/'>Instagram</a>
            </button>
        </div>
    )
}
export default Buttons;