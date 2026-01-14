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


// Add Task
let taskCount = 1;
const task = taskJson[taskJson.length - 1];
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

    // Get tasks and append them to the list
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<img src="images/checkbox-checked.png"> ${taskName}<span class="priority_rate priority">${priority}</span><button type="button" class="removeBtn">remove</button>`;
    
    const priorityRate = taskItem.querySelector(".priority_rate");
    priorityRate.classList.add(`priority_` + priority);
    
    document.getElementById('task_list').appendChild(taskItem);

    // reset and hide modal
    console.log(taskJson);
    taskForm.reset();
    taskForm.style.display = 'none';

    taskCount++;
});