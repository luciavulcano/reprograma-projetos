//botão para adicionar tarefas
const buttonAddTask = document.querySelector('#buttonAdd');
//aonde eu irei escrever para capturar o value
const inputTask = document.querySelector('#taskInput');
//id da ul 
const taskList = document.querySelector('#taskList');
//botão de deletar uma li
const deleteTask = document.querySelector('#deleteTask');
//a li
const listItem = document.querySelector('.list-item');
//mensagem de erro
const errorMessage = document.querySelector('.error');
//botão de deletar TUDOH
const clearAll = document.querySelector('.delete-all');
//botão de selecionar tudo
const buttonCheckAll = document.querySelector('#buttonCheckAll'); 



//evento de clique para adicionar tarefas
//funcionalidades:
//mensagem de erro
//limpa o value do input
//limpa o erro quando a tarefa é adicionada corretamente
//cria o botão de deletar tarefa
//cria uma checkbox vazia
buttonAddTask.addEventListener('click', function () {

    if (inputTask.value.length > 0) {
        taskList.innerHTML += `
        <li class="list-item">
            <input type="checkbox" name="checkThis" class="checkbox">
            <p class="list-text">${inputTask.value}</p>
            <img src="img/trash.png" class="delete-task" id="deleteTask" onclick="deleteLiItem(this)">
            <hr></li>`
        inputTask.value = "";
        errorMessage.innerHTML = "";
    } else {
        return errorMessage.innerHTML = '*please, type a task'
    }
});

//função para deletar uma tarefa
function deleteLiItem(li) {
    li.parentNode.remove()

};

//função para apagar a ul
clearAll.addEventListener('click', function () {
    taskList.innerHTML = '';
    inputTask.value = "";
});

//função para selecionar todos os checkboxes
buttonCheckAll.addEventListener('click', function () {
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = true;
    };
});


