import "./cardsInformation.css"
import star from "../../images/Star1.png"
import { ButtonAgendar } from "../button/button"

function Cards(p) {
    return (
        <div className="cards">
            <div className="card">
                <div className="star">
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                </div>
                <p className="desc">
                    {p.desc}
                </p>
                <img className="foto" src={p.foto} />
                <p className="nome">
                    <span>{p.nome}</span>
                    <br />
                    {p.cargo}
                </p>
            </div>
        </div>
    )
}

/*function Card(p){
    return(
        <div className="cardApresentacao">
            <h1>{p.num}</h1>
            <p>{p.text}</p>
        </div>
    )
}*/

function CardAgendamento(p) {
    return (
        <div className="agendamento">
            <img src={p.img} />
            <div className="inforCard">
                <p className="title">{p.title}</p>
                <p className="date">{p.date}</p>
                < ButtonAgendar
                    path={p.path}
                    nome= {p.nome}
                />
            </div>

        </div>
    )
}

export { Cards, /*,Card*/ CardAgendamento }