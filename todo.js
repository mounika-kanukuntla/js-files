document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    addTodoBtn.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const li = document.createElement('li');
            li.textContent = todoText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => {
                todoList.removeChild(li);
            });

            li.appendChild(removeBtn);
            todoList.appendChild(li);
            todoInput.value = ''; 
        }
    });
});
