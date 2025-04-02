const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please write down a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
      <label>
        <input type="checkbox">
        <span>${task}</span>
      </label>
      <span class="edit-btn">Edit</span>
      <span class="delete-btn">Delete</span>
      `;

  listContainer.appendChild(li);
  inputBox.value = "";

  // Update counters after adding a task
  updateCounters();
}

function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}

// Event Delegation: Attach a single event listener to listContainer
listContainer.addEventListener("click", function (event) {
  const li = event.target.closest("li");

  if (!li) return; // Ignore clicks outside <li>

  if (event.target.matches("input[type='checkbox']")) {
    li.classList.toggle("completed", event.target.checked);
    updateCounters();
  }

  if (event.target.matches(".edit-btn")) {
    const taskSpan = li.querySelector("span");
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
      li.querySelector("input[type='checkbox']").checked = false;
      updateCounters();
    }
  }

  if (event.target.matches(".delete-btn")) {
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
      updateCounters();
    }
  }
});
