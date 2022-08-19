const deletarTarefa = (atualiza, id) => {
/*    const botaoDeleta = evento.target
    
    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta */
    const index = id
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    
    tarefaCadastradas.splice(index, 1)

    localStorage.setItem('tarefas',JSON.stringify(tarefaCadastradas))

    atualiza()
}

const BotaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click',()=> deletarTarefa(atualiza, id))

    return botaoDeleta
}



export default BotaoDeleta