import React, {useState} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import useToken from './useToken';
import Login from '../Login/Login';
import Clientes from '../Clientes/Clientes';

function App() {
    const {token, setToken} = useToken();

    const exit = async e => {
        e.preventDefault();
        setToken(null);
    };

    if (!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <div className="wrapper">
            <div className="header">
                <h1>Avaliação para Seleção - Desenvolvedor Sênior</h1>
                <a href="#" onClick={exit}>Sair</a>
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
