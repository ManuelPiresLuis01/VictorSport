import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard"
import Menudashboard from "../../components/menudashboard/menudashboard"
import { Buttonproximo } from "../../components/button/button"

import "./passo.css"

function Passo1() {
    return (
        <div className="passo">
            <HeaderDashboard />
            <Menudashboard />
            <Buttonproximo
                path="/dashboard/adicionar/passo1"
                nome="Proximo"
            />
            <form>
                <h1>Vamos criar um evento!</h1>
                <div className="dados">
                    <div>
                        <label>Nome do evento *</label>
                        <input type="text" placeholder="Nome do evento" />
                    </div>

                    <div>
                        <label>Descrição *</label>
                        <textarea placeholder="Descrição do evento"></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Passo1