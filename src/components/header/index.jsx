import "./styles.css"

const Header = () => {
    return(
        <div className="teste">
        <div className="empty"><h2>oi</h2></div>
        <header>
            <div className="headerItem">
                <img src="https://hyperlocal.com.br/wp-content/uploads/2022/05/logo_hyperlocal_azul.svg" alt="Logo Hyperlocal" />
            </div>

            <div className="headerItem">
                <p>Soluções</p>
                <p>A Hyperlocal</p>
                <p>Contato</p>
                <p className="yourway">Your Way</p>
            </div>

            <div className="headerItem">
                <p></p>
                <img src="https://hyperlocal.com.br/wp-content/uploads/flags/Flag_eua2.svg" alt="usa" />
            </div>

            <div className="headerItem">
                <button>Login</button>
                <button>Criar Conta</button>
            </div>
        </header>
        </div>
    )
}

export default Header