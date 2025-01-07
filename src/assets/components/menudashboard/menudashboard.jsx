import "./menudashboard.css"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";


function Menudashboard() {
    return (
        <div className="menudashboard">
            <p>Manuel Luis</p>
            <div className="agendado">
                <div>
                    <span>0</span>
                    <br />
                    <small>
                        Eventos Agendados
                    </small>
                </div>
            </div>
            <nav>
                <div className="link">
                    <i><GoHomeFill /></i>
                    <Link>Principio</Link>
                </div>
                <div className="link">
                    <i> <FaPlus /></i>
                    <Link>Criar Evento</Link>
                </div>
            </nav>
        </div>
    )
}

export default Menudashboard