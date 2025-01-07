import "./HeaderDashboard.css"
import logo from "../../images/logotipo.png"

function HeaderDashboard(){
    return(
        <div className="headerdashboard">
            <img src={logo} alt="logotipo" />
        </div>
    )
}

export default HeaderDashboard