let userInput = document.getElementById('input')
let btn = document.getElementById('btn')
let clearItemsBtn = document.getElementById('clearItms')
let list = document.getElementById('list')
let todoList = []
let editId = null

function renderList() {
    list.innerHTML = ''
    todoList?.forEach((todo) => {
        let li = document.createElement('li')
        li.setAttribute('class', 'todo')
        li.innerHTML = ` <p>${todo.todo}</p>
                    <div>
                        <button class="editBtn" onClick={editFunc(${todo.id})}><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="deleteBtn" onClick={delFunc(${todo.id})}><i class="fa-solid fa-trash"></i></button>
                    </div>`
        list.appendChild(li)
    })
}

clearItemsBtn.addEventListener('click', function () {
    todoList = []
    list.innerHTML = ''
})

btn.addEventListener('click', function (e) {
    e.preventDefault()
    if (btn.innerHTML === 'Add') {

        if (userInput.value.trim()) {
            list.innerHTML = ''
            todoList.push({
                todo: userInput.value,
                id: Date.now(),
            })
            userInput.value = ''
            renderList()
        }
    } else if (btn.innerHTML === 'Edit') {
        let todo = todoList.find((todo) => todo.id === editId)
        if (todo) {
            todo.todo = userInput.value;
            renderList();
            btn.innerHTML = 'Add';
            userInput.value = '';
            editId = null; 
        }

    }

})

function delFunc(id) {
    todoList = todoList.filter((todo) => {
        return todo.id !== id
    })
    renderList()
}

function editFunc(id) {
    let todo = todoList.find((todo) => todo.id === id)
    if (todo) {
        userInput.value = todo.todo
        btn.innerHTML = 'Edit'
        editId = id
    }
}