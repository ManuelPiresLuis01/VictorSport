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
                txt = "Vamos criar um evento!"
                path="/dashboard/adicionar/passo2"
                nome="Proximo"
            />
            <form >
                <div className="dados">
                    <div>
                        <div>
                            <label>Nome do evento *</label>
                            <br />
                            <input type="text" placeholder="Nome do evento" />
                        </div>
                        <br />

                        <div>
                            <label>Data do evento *</label>
                            <br />
                            <input type="date" placeholder="Data do evento" />
                        </div>
                        <br />
                        <div>
                            <label>Hora de inicio *</label>
                            <br />
                            <input type="time" />
                        </div>
                        <br />
                        <div>
                            <label>Hora de termino *</label>
                            <br />
                            <input type="time" />
                        </div>
                    </div>

                    <div>
                        <label>Descrição do evento*</label>
                        <br />
                        <textarea placeholder="Descrição do evento"></textarea>
                    </div>
                </div>
                <div className="select">
                    <div>
                        <label>Limite de inscricões</label>
                        <br />
                        <input type="time" />
                    </div>

                    <div>
                        <label>Evento de um dia? </label>
                        <br />
                        <select>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>
                    </div>

                    <div>
                        <label>Numero de telefone *</label>
                        <br />
                        <input type="tel" />
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Passo1