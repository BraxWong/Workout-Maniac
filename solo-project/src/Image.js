import image from './me.jpeg';
import './image_style.css'
function Image() {
    return (
        <div className='image'>
            <img src = {image} className = "mug_shot" alt="slime_shady" width={140}></img>
        </div>
    )
}

export default Image;