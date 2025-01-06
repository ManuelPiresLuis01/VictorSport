import { Link } from "react-router-dom"
import "./header.css"

function Header() {
    return (
        <div className="header">
            <p>Victor Sport</p>
            <ul>
                <li><a href="#">Informação</a></li>
                <li><a href="#">Calendario</a></li>
                <li><button><Link to="/login">Entrar</Link></button></li>
            </ul>
        </div>
    )
}

export default Header