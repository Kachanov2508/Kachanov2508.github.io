const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTask);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add task');
    } else {
        // Create li element
        const li = document.createElement('li');
        // Add class li
        li.className = 'collection-item';
        // Create textnode and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement('a');
        // Add class link
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    }


    e.preventDefault();
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are yore sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }

    e.preventDefault();
}

// Clear task
function clearTask(e) {
    while (taskList.firstChild) {
        // taskList.firstChild.remove();
        taskList.removeChild(taskList.firstChild);
    }

    e.preventDefault();
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value;
    console.log(text);
}