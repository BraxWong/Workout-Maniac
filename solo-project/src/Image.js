import image from './images.jpg';
import './image_style.css'
function Image() {
    return (
        <div className='image'>
            <img src = {image} className = "mug_shot" alt="slime_shady"></img>
        </div>
    )
}

export default Image;