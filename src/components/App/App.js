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
        <div className="wrapper">
            <div className="header">
                <h1>Avaliação para Seleção - Desenvolvedor Sênior</h1>
                <div>
                    Seja bem vindo, <span>{session?.username}</span>&nbsp;|&nbsp;
                    <a href="#" onClick={exit}>Sair</a>
                </div>
            </div>
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
                        <Clientes/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
