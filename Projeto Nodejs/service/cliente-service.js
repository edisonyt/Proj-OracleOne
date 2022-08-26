const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {

            return resposta.json()

        })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            return resposta.body
        })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

<<<<<<< HEAD
const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {
            return resposta.json()
        })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
=======
const criaCliente = (nome, email) =>{
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
>>>>>>> b820fbea3c3e8039dd74a7a5888bb6c864205ae6
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
<<<<<<< HEAD
        .then(resposta => {
            return resposta.json()
        })
}

export const clienteService = {
    listaClientes,
=======
    .then( resposta => {
        return resposta.body
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE'
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta => {
        return resposta.json()
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        return resposta.json()
    })
}

export const clienteService = {
    listaClientes, 
>>>>>>> b820fbea3c3e8039dd74a7a5888bb6c864205ae6
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}