var mainDiv = document.getElementById("main");
var taskInput = document.getElementById("taskInput");
var taskFilter = document.getElementById("taskFilter");
var tasklist = document.createElement("div");
tasklist.className = "task-list";
mainDiv.appendChild(tasklist);

var activeTasks = [];
var completedTasks = [];
var deletedTasks = [];
var maxCompletedTasks = 5;

// Load tasks from local storage on page load
loadTasksFromLocalStorage();
  
// Load tasks from local storage on page load

function loadTasksFromLocalStorage() {
  let storedActiveTasks = JSON.parse(localStorage.getItem("activeTasks")) || [];
  let storedCompletedTasks =
    JSON.parse(localStorage.getItem("completedTasks")) || [];
  let storedDeletedTasks =
    JSON.parse(localStorage.getItem("deletedTasks")) || [];

  activeTasks = storedActiveTasks.map((taskText) =>
    createTaskElement(taskText),
  );
  completedTasks = storedCompletedTasks.map((taskText) =>
    createCompletedTaskElement(taskText),
  );
  deletedTasks = storedDeletedTasks.map((taskText) =>
    createDeletedTaskElemetn(taskText),
  );

  updateTaskList();
}

function saveTasksToLocalStorage() {
  localStorage.setItem(
    "activeTasks",
    JSON.stringify(
      activeTasks.map((task) => task.querySelector("p").innerHTML),
    ),
  );
  localStorage.setItem(
    "completedTasks",
    JSON.stringify(
      completedTasks.map((task) => task.querySelector("p").innerHTML),
    ),
  );
  localStorage.setItem(
    "deletedTasks",
    JSON.stringify(
      deletedTasks.map((task) => task.querySelector("p").innerHTML),
    ),
  );
}

function addTask() {
  let textInput = taskInput.value;

  if (textInput != "") {
    let newTask = createTaskElement(textInput);
    activeTasks.push(newTask);
    updateTaskList();
    saveTasksToLocalStorage(); // Save tasks to local storage
    taskInput.value = "";
  } else {
    alert("Please enter a text");
  }
}

function createDeletedTaskElemetn(taskText) {
  let WrapDiv = document.createElement("div");
  WrapDiv.className = "wrap-div";
  let newTask = document.createElement("div");
  let textP = document.createElement("p");
  let recoverButton = createButton(newTask, "Recover");
  let deleteButton = createButton(newTask, "Delete");

  newTask.className = "task even"; // Set initial class (you can adjust this logic)
  textP.innerHTML = taskText;
  newTask.appendChild(textP);
  WrapDiv.appendChild(newTask);
  WrapDiv.appendChild(deleteButton);
  WrapDiv.appendChild(recoverButton);

  deleteButton.addEventListener("click", function () {
    toggleDeleteButtonFunctionality(WrapDiv, textP, deleteButton);
  });
  recoverButton.addEventListener("click", function () {
    toggleRecoverButtonFunctionality(
      WrapDiv,
      textP,
      deleteButton,
      recoverButton,
    );
  });

  return WrapDiv;
}

function createCompletedTaskElement(taskText) {
  let WrapDiv = document.createElement("div");
  WrapDiv.className = "wrap-div";
  let newTask = document.createElement("div");
  let textP = document.createElement("p");

  newTask.className = "task even"; // Set initial class (you can adjust this logic)
  textP.innerHTML = taskText;

  newTask.appendChild(textP);
  WrapDiv.appendChild(newTask);

  return WrapDiv;
}

function createTaskElement(taskText) {
  let WrapDiv = document.createElement("div");
  WrapDiv.className = "wrap-div";
  let newTask = document.createElement("div");
  let textP = document.createElement("p");
  let deleteButton = createButton(newTask, "Delete");

  newTask.className = "task even"; // Set initial class (you can adjust this logic)
  textP.innerHTML = taskText;
  newTask.appendChild(textP);
  WrapDiv.appendChild(newTask);
  WrapDiv.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    toggleDeleteButtonFunctionality(WrapDiv, textP, deleteButton);
  });

  newTask.addEventListener("click", function () {
    toggleTaskCompletion(WrapDiv, textP, deleteButton);
  });

  return WrapDiv;
}

function createButton(task, text) {
  let wrapDiv = document.createElement("div");
  wrapDiv.className = "delete-button";
  let button = document.createElement("button");
  button.innerHTML = text;
  wrapDiv.appendChild(button);
  return wrapDiv;
}

function deleteTask(task) {
  tasklist.removeChild(task);
  deletedTasks.push(task);
  updateTaskList();
}

function toggleTaskCompletion(task, taskText, deleteButton) {
  if (activeTasks.includes(task)) {
    // If the task is in activeTasks, move it to completedTasks
    activeTasks = activeTasks.filter((activeTask) => activeTask !== task);
    task.removeChild(deleteButton);
    taskText.style.textDecoration = "line-through";
    completedTasks.push(task);
  }

  // Manage completed tasks count
  if (completedTasks.length > maxCompletedTasks) {
    let oldestCompletedTask = completedTasks.shift();
    tasklist.removeChild(oldestCompletedTask);
  }

  updateTaskList(); // Update the task list after toggling completion
}

function toggleDeleteButtonFunctionality(task, taskText, deleteButton) {
  if (deletedTasks.includes(task)) {
    // If the task is in deletedTasks, permanently delete it
    deletedTasks = deletedTasks.filter((deletedTask) => deletedTask !== task);
  } else {
    // If the task is in activeTasks or completedTasks, move it to deletedTasks
    activeTasks = activeTasks.filter((activeTask) => activeTask !== task);

    deletedTasks.push(task);

    // Add the recover button
    let recoverButton = createButton(task, "Recover");
    recoverButton.addEventListener("click", function () {
      toggleRecoverButtonFunctionality(
        task,
        taskText,
        deleteButton,
        recoverButton,
      );
    });
    task.appendChild(recoverButton);
  }

  updateTaskList(); // Update the task list after deleting or recovering
}

function toggleRecoverButtonFunctionality(
  task,
  taskText,
  deleteButton,
  recoverButton,
) {
  if (deletedTasks.includes(task)) {
    // If the task is in deletedTasks, move it back to activeTasks
    deletedTasks = deletedTasks.filter((deletedTask) => deletedTask !== task);
    activeTasks.push(task);
    task.removeChild(recoverButton); // Remove the recover button
    task.appendChild(deleteButton); // Add the delete button back
    taskText.style.textDecoration = "none";
  }

  updateTaskList(); // Update the task list after recovering
}

function updateTaskList() {
  let selectedTasks;

  switch (taskFilter.value) {
    case "active":
      selectedTasks = activeTasks;
      break;
    case "completed":
      selectedTasks = completedTasks;
      break;
    case "deleted":
      selectedTasks = deletedTasks;
      break;
    default:
      selectedTasks = activeTasks;
  }

  clearTaskList();
  selectedTasks.forEach((task) => tasklist.appendChild(task));
  saveTasksToLocalStorage(); // Save tasks to local storage
}

function clearTaskList() {
  while (tasklist.firstChild) {
    tasklist.removeChild(tasklist.firstChild);
  }
}

// Initial setup
taskFilter.addEventListener("change", updateTaskList);
updateTaskList(); // Update task list initially based on the default filter
