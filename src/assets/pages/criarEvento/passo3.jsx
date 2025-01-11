import "./passo.css"
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard"
import Menudashboard from "../../components/menudashboard/menudashboard"
import { Buttonproximo } from "../../components/button/button"
import { BiCheckCircle } from "react-icons/bi";

function Passo3() {
    return (
        <div className="passo">
            <HeaderDashboard />
            <Menudashboard />
            <Buttonproximo
                txt="Parabens voce criou o seu evento!"
                path="/dashboard"
                nome="Principio"
                type=""
            />
                    i
        
        </div>
    )
}

export default Passo3