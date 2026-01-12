// Variables
const addTaskBtn = document.getElementById('addTaskBtn');

// Array
const taskJson = {};

const taskForm = document.createElement('form');
taskForm.id = 'taskForm';

taskForm.innerHTML = `
    <div class="taskModal">
        <label>Task</label>
        <input class="taskInput" type="text" id="taskName" placeholder="Enter a task">
        <label for="cars">Select Priority</label>
        <select class="taskInput" name="taskPriority" id="taskPriority">
            <option class="dropdown" value="low">Low</option>
            <option class="dropdown" value="medium">Medium</option>
            <option class="dropdown" value="high">High</option>
            <option class="dropdown" value="urgent">Urgent</option>
        </select>
        <button id="createTaskBtn">Create Task</button>
    </div>
`;

const bodyElement = document.querySelector('body');
bodyElement.appendChild(taskForm);
