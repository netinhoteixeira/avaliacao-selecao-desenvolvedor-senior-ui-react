import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import useSession from './useSession';
import Login from '../Login/Login';
import Clientes from '../Clientes/Clientes';

function App() {
    const {session, setSession} = useSession();

    const exit = async e => {
        e.preventDefault();
        setSession(null);
    };

    if (!session) {
        return <Login setSession={setSession}/>
    }

    return (
        <div className="App container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">Avaliação para Seleção - Desenvolvedor Sênior</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><span
                        className="nav-text">Seja bem vindo, <strong>{session?.username}</strong></span></li>
                    <li className="nav-item">
                        <button onClick={exit} type="button" className="btn btn-dark">Sair</button>
                    </li>
                </ul>
            </header>
            <main>
                <div className="container">
                    <BrowserRouter>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => {
                                    return (<Redirect to="/clientes"/>);
                                }}
                            />
                            <Route path="/clientes">
                                <Clientes session={session}/>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </main>
        </div>
    );
}

export default App;
