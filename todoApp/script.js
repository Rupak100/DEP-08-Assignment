document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    // Add task function
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;

        // Append task to task list
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';

        // Add delete task functionality
        const deleteButton = taskItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    };

    // Event listener for the add task button
    addTaskButton.addEventListener('click', addTask);

    // Allow pressing Enter to add task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});  