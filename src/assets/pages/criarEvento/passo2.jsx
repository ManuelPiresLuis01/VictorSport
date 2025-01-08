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
                type="submit"
            /> 

            <div className="dados">
                <div className="upload">
                    <label>Faça upload do panfleto do evento *</label>
                    <input type="file" />
                </div>
            </div>
        </div>
    )
}

export default Passo2