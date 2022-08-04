import {novoItem} from './componentes/criaTarefas.js'
import { carregaTarefa } from './componentes/carregaTarefa.js'  

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', novoItem)

carregaTarefa()
