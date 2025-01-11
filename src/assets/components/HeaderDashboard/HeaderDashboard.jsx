import "./HeaderDashboard.css"
import logo from "../../images/logotipo.png"
import { FaCircleUser } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderDashboard() {
    return (
        <div className="headerdashboard">
            <img src={logo} alt="logotipo" />
            <div className="user">
                <div>
                    <i><FaPlus /></i>
                    <Link to="/dashboard/adicionar/passo1">Criar evento</Link>

                </div>
                <div>
                    <i><FaCircleUser /></i>
                    <p>Manuel Luis</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderDashboard