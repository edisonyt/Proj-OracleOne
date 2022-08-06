const concluirTarefa = (atualiza, id) => {
    /*    const botaoConclui = evento.target
    
        const tarefaCompleta = botaoConclui.parentElement
    
        tarefaCompleta.classList.toggle('done')
    */
        const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    
        tarefaCadasradas[id].concluida = !tarefaCadasradas[id].concluida
    
        localStorage.setItem('tarefas',JSON.stringify(tarefaCadasradas))
    
        atualiza()
    }

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    
    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))
    
    return botaoConclui
}

export default BotaoConclui