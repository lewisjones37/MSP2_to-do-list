const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)

        input.value=''

        updateLS()
    }
}

// JavaScript for Swipe-to-Delete Functionality

let touchStartX = null;

// Event Listener for Touch Start
todosUL.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

// Event Listener for Touch End
todosUL.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const swipeDistance = touchEndX - touchStartX;
  const swipeThreshold = 50; // Adjust the threshold as needed

  if (Math.abs(swipeDistance) > swipeThreshold) {
    // Swipe Detected - Delete the task
    const taskToDelete = e.target;
    taskToDelete.parentNode.removeChild(taskToDelete);
  }

  updateLS()
});

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos= []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}