import imagen from '../images/icons8-pop-corn.png'
import './header.css'

export function Header() {
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

