export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const dataTopo = document.createElement('li')
    const conteudo = `<p class="content-data">${data.format('DD/MM/YYYY')}</p>`

    dataTopo.innerHTML = conteudo

    return dataTopo
}