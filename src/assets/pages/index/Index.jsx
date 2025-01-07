import Header from "../../components/header/Header"
import logo from "../../images/logotipo.png"
import { Link } from "react-router-dom"
import { Cards, CardAgendamento } from "../../components/cardsInformation/cardsInformation"
import "./index.css"
import Footer from "../../components/footer/footer"
import img1 from "../../images/Ellipse10.png"
import img2 from "../../images/Ellipse11.png"
import img3 from "../../images/Ellipse12.png"



function Index() {
    return (
        <div className="index">
            <div className="main">
                <div className="parte1">
                    <div>
                        <Header />
                        <div className="presentation">
                            <div>
                                <p>Agende e vê quais jogos vais curtir como nunca antes, em uma plataforma totalmente personalizada para você <span className="exclamar">!</span></p>
                                <button className="btn-agendar"><Link to="/login">Agendar Agora</Link></button>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="evento-agendado">Agendamentos para este mes</h1>

                <div className="eventos-agendados">
                    <CardAgendamento
                        title="Campeonato de Xadrez"
                        date="15 de janeiro de 2025"
                    />
                    <CardAgendamento
                        title="Campeonato de Xadrez"
                        date="15 de janeiro de 2025"
                    />
                    <CardAgendamento
                        title="Campeonato de Xadrez"
                        date="15 de janeiro de 2025"
                    />
                    <CardAgendamento
                        title="Campeonato de Xadrez"
                        date="15 de janeiro de 2025"
                    />
                </div>

                <div className="logo">
                    <img src={logo} alt="logotipo" />

                    <div className="presentation">
                        <div>
                            <p>Agende e vê quais jogos vais curtir como nunca antes, em uma plataforma totalmente personalizada para você !</p>
                            <div className="btn">
                                <button className="btn-agendar"><Link to="/login">Agendar Agora</Link></button>
                                <button className="btn-agendar"><Link to="/login">Ver a Agenda</Link></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Testemunhas">
                    <h1>O que outras pessoas falam de nós</h1>
                    <div className="testemunhas">
                        <Cards
                            desc="Eu sempre tive dificuldades em encontrar bons lugares para achar eventos desportivos para eu passar a tarde. Com o Victor Sport, encontrei bons eventos em horarios nobres!"
                            foto={img1}
                            nome="Ana Silva"
                            cargo="Usuario do Victor Sport"
                        />
                        <Cards
                            desc="“Sou criadora de eventos desportivos e o victor Sport me trouxe a oportuniade de agendar os meus eventos e ter a possibilidade de disponibilizar para muitos!. Victor Sport é uma plataforma incrível para divulgar os nossos eventos!”"
                            foto={img2}
                            nome="Mariana Lopes"
                            cargo="Empresária e Parceira do Victor Sport"
                        />
                        <Cards
                            desc="“Eu precisava organizar um evento e, com o Victor Sport, consegui achar o local perfeito. Além disso, tenho usado o app para explorar eventos. A qualidade das recomendações ajudam muito na minha escolha. Recomendo!”"
                            foto={img3}
                            nome="Pedro Almeida"
                            cargo="Organizador de Eventos"
                        />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Index