import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
    return fetch('http://162.243.174.113:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => {
        if (data.ok) {
            try {
                const authorization = data.headers.get('authorization');
                const pieces = authorization.split(' ');

                return pieces[1];
            } catch (e) {
                // Do nothing.
            }
        }

        return null;
    });
}

export default function Login({setToken}) {
    const [loginError, setLoginError] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        setLoginError(false);

        const token = await loginUser({
            'usuario': username,
            'senha': password
        });
        setToken(token);

        if (token === null) {
            setLoginError(true);
        }
    };

    return (
        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Acesso Restrito</h1>
                { loginError }
                { loginError &&
                    <div className="alert alert-danger" role="alert">
                        <strong>Acesso não concedido!</strong> Verifique seus dados de acesso e tente novamente.
                    </div>
                }
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput"
                           placeholder="comum" onChange={e => setUserName(e.target.value)}/>
                    <label htmlFor="floatingInput">Seu usuário</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"
                           placeholder="123456" onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Sua senha</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Acessar</button>
            </form>
        </main>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
