import "./Login.css"
import logo from "../../images/logotipo.png"
import { FaRegUser } from "react-icons/fa"
import { RiLockPasswordLine } from "react-icons/ri"
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="logotipo" />
            <form>
                <h1>Login</h1>
                <div className="input">
                    <FaRegUser/>
                    <input
                        type="email"
                        placeholder="Username ou email"
                        required
                    />
                </div>
                <br />
                <div className="input">
                    < RiLockPasswordLine/>
                    <input
                        type="password"
                        placeholder="password"
                    />
                </div>
                <br />
                <Link className="esqueci">Esqueci a Senha!</Link>
                <br />
                <button>Entrar</button>
                <br />
                <Link className="naotenho" to="/login/cadastrar">Não tenho uma conta!</Link>
            </form>
        </div>
    );
}

export default Login