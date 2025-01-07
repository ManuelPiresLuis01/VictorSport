import "./passo.css"
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard"
import Menudashboard from "../../components/menudashboard/menudashboard"
import { Buttonproximo } from "../../components/button/button"

function Passo2(){
    return(
        <div className="passo">
            <HeaderDashboard />
            <Menudashboard />
            <Buttonproximo
                txt = "Termina de criar o teu evento!"
                path="/dashboard/adicionar/passo3"
                nome="Criar Evento"
            /> 
        </div>
    )
}

export default Passo2