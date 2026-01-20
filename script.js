// Variables
const addTaskBtn = document.getElementById('addTaskBtn');

// Array
const taskJson = [];

// Create a form that will take in user input, used to input tasks
const taskForm = document.createElement('form');
taskForm.id = 'taskForm';

taskForm.innerHTML = `
    <div class="taskModal">
        <h1>Task</h1>
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
    taskItem.innerHTML = `<img src="images/checkbox-blank.png" class="task-check"> ${taskName}<span class="priority_rate priority">${priority}</span><button type="button" class="removeBtn">remove</button>`;
    taskItem.dataset.id = "task" + taskCount;

    const priorityRate = taskItem.querySelector(".priority_rate");
    priorityRate.classList.add(`priority_` + priority);
    
    document.getElementById('task_list').appendChild(taskItem);

    // reset and hide modal
    taskForm.reset();
    taskForm.style.display = 'none';

    taskCount++;
});

// Check completed tasks
document.getElementById('task_list').addEventListener('click', (e) => {
    if (!e.target.classList.contains('task-check')) return;

    const taskItem = e.target.closest('li');
    const taskId = taskItem.dataset.id;

    const task = taskJson.find(t => t.id === taskId);
    if (!task) return;

    task.completed = !task.completed;

    e.target.src = task.completed ? 'images/checkbox-checked.png' : 'images/checkbox-blank.png';
    
    // check off the task name
    taskItem.classList.toggle('task_complete', task.completed);
});


// filter tasks
document.querySelector("#raioContainer").addEventListener("change", (e) => {
    const selectedFilter = e.target.closest("input");
    const filterId = selectedFilter.id;
    // loop through dom for list items
    const taskItems = document.querySelectorAll("#task_list li");
    for (const li of taskItems) {
        const taskId = li.dataset.id
        const task = taskJson.find(task => task.id === taskId);

        if (filterId === "filter_all") {
            li.style.display = "";
        } else if(filterId === "filter_active") {
            li.style.display = task.completed ? "none" : "";
        }else if (filterId === "filter_complete") {
            li.style.display = task.completed ? "" : "none";
        }
    }
});


// Removing a task
document.querySelector("#task_list").addEventListener("click", (e) => {
    if (!e.target.classList.contains("removeBtn")) return;

    const taskItem = e.target.closest("li");
    const taskId = taskItem.dataset.id;
    taskItem.remove();

    // Remove from data
    for (let i = 0; i < taskJson.length; i++) {
    if (taskJson[i].id === taskId) {
        taskJson.splice(i, 1);
        break;
    }
}
});
