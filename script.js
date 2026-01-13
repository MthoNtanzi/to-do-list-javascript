// Variables
const addTaskBtn = document.getElementById('addTaskBtn');

// Array
const taskJson = [];

// Create a form that will take in user input, used to input tasks
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
        <button id="createTaskBtn" type="submit">Create Task</button>
    </div>
`;
// Append task form to the body
const mainElement = document.querySelector('main');
mainElement.appendChild(taskForm);

// show task form
addTaskBtn.addEventListener('click',()=>{
    taskForm.style.display = 'block';
});

// hide task form when user clicks outside
taskForm.addEventListener('click', (e) => {
  if (e.target === taskForm) {
    taskForm.style.display = 'none';
  }
});

let taskCount = 1;
const task = taskJson[taskJson.length - 1];
// Add Task
taskForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const taskName = document.getElementById('taskName').value.trim();
    const priority = document.getElementById('taskPriority').value;

    if(!taskName) return;

    taskJson.push({
        id: "task"+taskCount,
        taskName,
        priority,
        completed: false
    });

    // let todoActivity = `
    //     <li><img src="images/checkbox-checked.png">${taskJson}</li>
    // `;

    console.log(taskJson);
    taskForm.reset();

    taskCount++;
});