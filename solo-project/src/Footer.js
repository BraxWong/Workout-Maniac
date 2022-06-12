import Twitter from './Twitter.png'
import meta from './meta.png'
import github from './github.png'
import ig from './ig_logo.png'
import './Footer.css'

function Footer() {
    return (
        <div>
            <br></br>
            <footer className = 'main_foot'>
                <img src = {Twitter} width = {40} height ={40}></img>
                <img src = {meta} width = {40} height ={40}></img>
                <img src = {github} width = {40} height ={40}></img>
                <img src = {ig} width = {40} height ={40}></img>
            </footer>
        </div>
        
    )
}

export default Footer;