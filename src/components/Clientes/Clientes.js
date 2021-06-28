import React from 'react';

import './Clientes.css';

import {cpfMask} from '../../filters/Mask';

export default function Clientes({session}) {
    return (
        <div className="Clientes">
            <h2>
                <span>Clientes</span>
                {session?.admin && <button className="btn btn-primary">Adicionar</button>}
            </h2>
            <table className="table table-hover">
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
                        <button type="button" className="btn btn-outline-secondary btn-sm">Visualizar</button>
                        {session?.admin &&
                        <div>
                            <button type="button" className="btn btn-outline-primary btn-sm">Editar</button>
                            <button type="button" className="btn btn-outline-danger btn-sm">Apagar</button>
                        </div>
                        }
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>{cpfMask('99999999900')}</td>
                    <td className="record-tools">
                        <button type="button" className="btn btn-outline-secondary btn-sm">Visualizar</button>
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
                        <button type="button" className="btn btn-outline-secondary btn-sm">Visualizar</button>
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
        </div>
    );
}