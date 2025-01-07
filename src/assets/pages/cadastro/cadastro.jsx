import logo from "../../images/logotipo.png"
import { Link } from "react-router-dom";

function Cadastro() {
    return (
        <div className="login">
            <img src={logo} alt="logotipo" />
            <form>
                <h1>Cadastre-se</h1>
                <div className="input">
                    <input
                        type="email"
                        placeholder="Digite um email"
                        required
                    />
                </div>
                <br />
                <div className="input">
                    <input
                        type="email"
                        placeholder="Repita o email"
                        required
                    />
                </div>
                <br />
                <div className="input">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <br />
                <div className="input">
                    <input
                        type="password"
                        placeholder="Repita a password"
                        required
                    />
                </div>
                <br />
                <button>Cadastrar</button>
                <br />
                <Link className="naotenho" to="/login">Ja tenho uma conta!</Link>
            </form>
        </div>
    );
}

export default Cadastro