import React from 'react';

import './Clientes.css';

import {cpfMask} from '../../filters/Mask';

export default function Clientes({session}) {

    // var myModal = document.getElementById('myModal')

    const loadClientAndViewModal = id => {
        const viewModal = document.getElementById('viewModal');

        if (viewModal !== null) {
            //viewModal.show();
        }
        //
        // setLoginError(false);
        //
        // const token = await loginUser({
        //     'usuario': username,
        //     'senha': password
        // });
        //
        // if (token === null) {
        //     setLoginError(true);
        // } else {
        //     const currentUser = await getProfile(token);
        //     setSession({
        //         token: token,
        //         id: currentUser.id,
        //         username: currentUser.usuario,
        //         admin: currentUser.administrador,
        //     });
        // }
    };

    return (
        <div className="Clientes">
            <h2>
                <span>Clientes</span>
                {session?.admin && <button className="btn btn-primary" data-bs-toggle="modal"
                                           data-bs-target="#addModal">Adicionar</button>}
            </h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">CPF</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>{cpfMask('99999999900')}</td>
                    <td className="record-tools">
                        <button type="button" className="btn btn-outline-secondary btn-sm"
                                onClick={loadClientAndViewModal(1)}>Ocultar detalhes
                        </button>
                        {session?.admin &&
                        <div>
                            <button type="button" className="btn btn-outline-primary btn-sm">Editar</button>
                            <button type="button" className="btn btn-outline-danger btn-sm">Apagar</button>
                        </div>
                        }
                    </td>
                </tr>
                <tr className="info">
                    <th scope="row"></th>
                    <td colSpan="3">
                        <form className="row g-3">
                            <div className="col-12">
                                <label className="form-label">Endereço</label>
                                <div className="form-control">There are many variations of passages of Lorem Ipsum available.</div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Complemento</label>
                                <div className="form-control">There are many variations of passages of Lorem Ipsum available.</div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Bairro</label>
                                <div className="form-control">Sudoeste</div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Cidade</label>
                                <div className="form-control">Brasília</div>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Estado</label>
                                <div className="form-control">DF</div>
                            </div>
                            <div className="col-md-2">
                                <label className="form-label">CEP</label>
                                <div className="form-control">99.999-000</div>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Telefone</label>
                                <div className="form-control">(61) 9999-9999</div>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Telefone</label>
                                <div className="form-control">(61) 9999-9999</div>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">E-mail</label>
                                <div className="form-control">meuemail@dominio.com</div>
                            </div>
                        </form>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>{cpfMask('99999999900')}</td>
                    <td className="record-tools">
                        <button type="button" className="btn btn-outline-secondary btn-sm">Mostrar detalhes</button>
                        {session?.admin &&
                        <div>
                            <button type="button" className="btn btn-outline-primary btn-sm">Editar</button>
                            <button type="button" className="btn btn-outline-danger btn-sm">Apagar</button>
                        </div>
                        }
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>{cpfMask('99999999900')}</td>
                    <td className="record-tools">
                        <button type="button" className="btn btn-outline-secondary btn-sm">Mostrar detalhes</button>
                        {session?.admin &&
                        <div>
                            <button type="button" className="btn btn-outline-primary btn-sm">Editar</button>
                            <button type="button" className="btn btn-outline-danger btn-sm">Apagar</button>
                        </div>
                        }
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addModalLabel">Adicionar cliente</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-primary">Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}