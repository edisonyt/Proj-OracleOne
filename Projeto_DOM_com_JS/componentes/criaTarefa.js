import { carregaTarefa } from './carregaTarefa.js'
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

export const novoItem = (evento) => {

    evento.preventDefault()

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-date]')
    const data = moment(calendario.value)
 
    const dataFormatada = data.format('DD/MM/YYYY')
    const concluida = false


    const dados = {
        valor,
        dataFormatada
    }

    const tarefasAtualizadas = [... tarefas, dados]

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

    input.value = " "

    carregaTarefa()
}    

export const Tarefa = ({valor, dataFormatada, concluida}) => {

    const tarefa = document.createElement('li')
    

    const conteudo = `<p class="content">${dataFormatada} * ${valor}<\p>`

    if(concluida) {
        tarefa.classList.add('done')
    }

    tarefa.classList.add('task')

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa
}