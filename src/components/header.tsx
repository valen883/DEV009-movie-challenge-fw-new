import imagen from '../images/icons8-pop-corn.png'
import './header.css'

function header() {
    return(
        <header className='header'>
            <img src={imagen}></img>
            <select>
                <option>Generos</option>
                <option>Terror</option>
                <option>Romance</option>
            </select>
        </header>
    )
}


export default header