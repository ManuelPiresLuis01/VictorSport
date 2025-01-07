import logo from "../../images/logotipo.png"

function Confirmar() {
    return (
        <div className="login">
            <img src={logo} alt="logotipo" />
            <form>
                <h1>Ative a sua conta !</h1>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Digite o codigo enviado no seu email"
                        required
                    />
                </div>
                <br />
                <button>Activar minha conta</button>
            </form>
        </div>
    );
}

export default Confirmar