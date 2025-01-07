import "./HeaderDashboard.css"
import logo from "../../images/logotipo.png"

function HeaderDashboard(){
    return(
        <div className="headerdashboard">
            <img src={logo} alt="logotipo" />
                <div className="username">M</div>
        </div>
    )
}

export default HeaderDashboard