import "./button.css"
import { Link } from "react-router-dom"

function Buttonproximo(p) {
    return (
        <button className="btn-proximo"><Link to={p.path}>{p.nome}</Link></button>
    )
}

export {Buttonproximo}