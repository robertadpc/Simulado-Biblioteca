import React from "react";
import { useHistory } from "react-router-dom";

export default function PerfilBibli() {

    const history = useHistory();

    const logout = () => {
        history.push('/');
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Tela Principal - Bibliotecária(o)</h3>
                <div>
                    <button className="btn btn-primary">Empréstimos</button>
                    <button className="btn btn-primary">Livros</button>
                </div>
                <div>
                    <button className="btn btn-primary">Estudantes</button>
                    <button className="btn btn-primary" onClick={logout}>Sair do Sistema</button>
                </div>
            </div>
        </div>
    );
}
