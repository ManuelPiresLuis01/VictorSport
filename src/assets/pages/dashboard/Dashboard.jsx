import "./Dashboard.css"
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard"
import Menudashboard from "../../components/menudashboard/menudashboard"
import { ButtonAgendar } from "../../components/button/button"


function Dashboard() {
    return (
        <div className="Dashboard">
            <HeaderDashboard />
            <Menudashboard />
            <div className="dadosdashboard">
                <div className="eventos">
                    <h1>Bem vindo a Victor Sport</h1>
                    <p>Actualmente não tens eventos agendados, cria um evento em menos de 5 minutos!</p>
                </div>
                <ButtonAgendar
                    path="/dashboard/adicionar/passo1"
                    nome="Criar evento"
                />
            </div>
        </div>
    )
}

export default Dashboard