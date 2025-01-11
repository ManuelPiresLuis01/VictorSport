import "./Dashboard.css"
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard"
import Menudashboard from "../../components/menudashboard/menudashboard"
import { ButtonAgendar } from "../../components/button/button"
import { CardAgendamento } from "../../components/cardsInformation/cardsInformation"
import imgAgendamento from "../../images/xadrez.jpg"


function Dashboard() {
    return (
        <div className="Dashboard">
            <HeaderDashboard />
            <Menudashboard />
            <div className="dadosdashboard">
                <div className="criar eventos">
                    <h1>Bem vindo a Victor Sport</h1>
                    <p>Cria um evento em menos de 5 minutos!</p>
                </div>
                <ButtonAgendar
                    path="/dashboard/adicionar/passo1"
                    nome="Criar evento"
                />
            </div>

            <div className="dados">
                <div className="meus">
                    <h1>Meus eventos</h1>
                    <div className="dados-agendados">
                        <CardAgendamento
                            img={imgAgendamento}
                            title="Campeonato de Xadrez"
                            date="15 de janeiro de 2025"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            path="*"
                            nome="Ver"
                        />
                        <CardAgendamento
                            img={imgAgendamento}
                            title="Campeonato de Xadrez"
                            date="15 de janeiro de 2025"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            path="*"
                            nome="Ver"
                        />
                        <CardAgendamento
                            img={imgAgendamento}
                            title="Campeonato de Xadrez"
                            date="15 de janeiro de 2025"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            path="*"
                            nome="Ver"
                        />

                    </div>
                </div>
                <div className="inscritos">
                    <h1>Eventos inscritos </h1>
                    <div className="dados-agendados">
                        <CardAgendamento
                            img={imgAgendamento}
                            title="Campeonato de Xadrez"
                            date="15 de janeiro de 2025"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            path="*"
                            nome="Ver"
                        />
                        <CardAgendamento
                            img={imgAgendamento}
                            title="Campeonato de Xadrez"
                            date="15 de janeiro de 2025"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            path="*"
                            nome="Ver"
                        />
                        <CardAgendamento
                            img={imgAgendamento}
                            title="Campeonato de Xadrez"
                            date="15 de janeiro de 2025"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            path="*"
                            nome="Ver"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard