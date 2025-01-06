import "./footer.css"
import img1 from "../../images/facebook.png"
import img2 from "../../images/twiter.png"
import img3 from "../../images/Vector.png"
import google from "../../images/appstore.png"
import google2 from "../../images/playstore.png"

function Footer() {
    return (
        <footer>
            <div className="footer1">
                <div className="um">
                    <h1>Victor Sport</h1>
                    <p>Agende, Compartilhe e viva!</p>
                    <div className="img">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                    </div>
                </div>

                <div className="dois">
                    <h2>Links Rapidos</h2>
                    <ul>
                        <li>Informação</li>
                        <li>Calendario</li>
                        <li>Entre Agora</li>
                    </ul>
                </div>

                <div className="tres">
                    <h2>Contactos</h2>
                    <ul>
                        <li>Endereço: Angola, Luanda</li>
                        <li>Telefone: +244 xxx xxx xxx</li>
                        <li>Email: suporte@victorsport.com</li>
                    </ul>
                    <div className="google">
                        <img src={google} />
                        <img src={google2} />
                    </div>

                    <p>Agende Jogos e vê quais jogos vais curtir como nunca antes!</p>
                    <div className="btn">
                        <button className="btn1">victorsport@email.com</button>
                        <button className="btn2">Inscrever-se</button>
                    </div>
                </div>

            </div>

            <hr />

            <div className="footer2">
                <div className="copy">
                    <p className="right">© 2024 Victor Sport. Todos os direitos reservados</p>
                    <div className="outros">
                        <p>Termos de Serviço</p>
                        <p>Política de Privacidade</p>
                        <p>Site Map</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;