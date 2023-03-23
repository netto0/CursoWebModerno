import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../template/Main";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'

export default function UserCrud() {
    const initialState = {
        user: {name: '', email:''},
        list: []
    }
    
    const [list, setList] = useState(initialState.list)
    const [user, setUser] = useState({...initialState.user})    

    useEffect( () => {
        axios(baseUrl).then(resp => {
            setList(resp.data)
        })
    },[])
    
    const clear = () => {
        setUser(initialState.user)
    }

    const save = () => {
        const userCopy = user
        const method = userCopy.id ? 'put' : 'post'
        const url = userCopy.id ? `${baseUrl}/${userCopy.id}` : baseUrl
        axios[method](url, userCopy)
            .then(resp => {
                const list = getUpdatedList(resp.data)
                setUser(initialState.user)
                setList(list)
            })
    }

    const getUpdatedList = (user, add = true) => {
        const listFiltered = list.filter(u => u.id !== user.id) 
        if(add) listFiltered.unshift(user)
        console.log(listFiltered,'oi')
        return listFiltered
    }

    const updateField = (event) => {
        const functionUser = {...user}
        functionUser[event.target.name] = event.target.value
        setUser(functionUser)
    }


    const renderForm = () => {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name='name'
                                value={user.name}
                                onChange={e => updateField(e)}
                                placeholder='Digite o nome...'
                                />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                            name="email"
                            value={user.email}
                            onChange={e => updateField(e)}
                            placeholder="Digite o e-mail..."/>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2" onClick={e => clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const load = (user) => {
        setUser(user)
    }

    const remove = (user) => {
        axios.delete(`${baseUrl}/${user.id}`)
        .then(resp => {
            console.log('apaguei')
            const filteredList = getUpdatedList(user, false)
            setList(filteredList)
    })
    }

    const renderTable = () => {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
    }

    const renderRows = () => {
        return list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>

                        <button className="btn btn-danger ml-2" onClick={() => remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    console.log(list)
        return (
            <Main {...headerProps}>
                {renderForm()}
                {renderTable()}
            </Main>
        )
}