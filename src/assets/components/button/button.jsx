import "./button.css"
import { Link } from "react-router-dom"

function Buttonproximo(p) {
    return (
        <div className="btn-proximo">
            <h1>{p.txt}</h1>
            <button ><Link to={p.path}>{p.nome}</Link></button>
        </div>
      
    )
}

function ButtonAgendar(p) {
    return (
        <button className="btn-agendar"><Link to={p.path}>{p.nome}</Link></button>
    )
}
export { Buttonproximo, ButtonAgendar }