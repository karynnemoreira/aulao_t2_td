import React from "react"
import "./Header.css"
import Logo from "../../assets/logo.png"

function Header() {
    return (
        <header>

            <img src={Logo} alt="Logo com dispositivos eletrônicos" />

            <h2 className="tituloHeader"> Eletronicos</h2>

            <nav>
                <ul>
                    <li>Galeria</li>
                    <li>Lojas</li>
                </ul>
            </nav>

            {/* <form>
                <label> Nome: </label>
                <input type="text" placeholder="Digite seu nome" />
                <label>Senha: </label>
                <input type="password" placeholder="Digite sua senha" />
                <button>Entrar</button>
            </form> */}

        </header>
    )
}

export default Header