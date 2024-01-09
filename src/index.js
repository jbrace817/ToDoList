import "./style.css";
import { Task, toDoListActions, arrayOfTasks } from "./Tasks.js";

// const btn_AddTask = document.querySelector(".btn-addTask");
// const txt_title = document.getElementById("title");
// const txt_description = document.getElementById("description");
// const input_date = document.getElementById("date");
// const txt_priority = document.getElementById("priority");

// btn_AddTask.addEventListener("click", () => {
//   toDoListActions.addTask(
//     new Task(
//       txt_title.value,
//       txt_description.value,
//       input_date.value,
//       txt_priority.value
//     )
//   );
//   console.log(arrayOfTasks);
// });

const toDoListEvents = (function () {
  const btn_AddTask = document.querySelector(".btn-save");
  const txt_Title = document.getElementById("task-title");
  const txt_Description = document.getElementById("task-desc");
  const input_Date = document.getElementById("dueDate");
  const txt_Priority = document.getElementById("task-priority");
  const card_Container = document.querySelector(".taskContainer");
  const btn_Delete = document.querySelector(".delete-task");
  const btn_Priority = document.querySelector(".priority-list");
  const ul_Priority = document.querySelector(".priority-list> ul");
  const li_Priority = document.querySelectorAll("li");

  const add = () => {
    btn_AddTask.addEventListener("click", () => {
      toDoListActions.addTask(
        new Task(
          txt_Title.value,
          txt_Description.value,
          input_Date.value,
          txt_Priority.value
        )
      );

      //   card_priority.textContent = txt_priority.value;
      console.log(arrayOfTasks, arrayOfTasks[0].getId());
      localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
    });
  };

  const deleteTask = () => {
    btn_Delete.addEventListener("click", () => {
      // document.getElementById(arrayOfTasks[0].getId()).remove();
      // toDoListActions.deleteTask(arrayOfTasks[0].getId());
      console.log(arrayOfTasks);
      const lcl_store = JSON.parse(localStorage.getItem("tasks"));
      console.log(lcl_store[0]);
      localStorage.clear("tasks");
      console.log(lcl_store);
    });
  };

  const selectPriority = () => {
    btn_Priority.addEventListener("click", () => {
      ul_Priority.classList.toggle("reveal");
    });
    li_Priority.forEach((li) => {
      li.addEventListener("click", (e) => {
        const priorityLevel = e.target.textContent;
        if (priorityLevel) {
          console.log("clicked");
          txt_Priority.textContent = priorityLevel;
        }
      });
      ul_Priority.classList.toggle("reveal");
    });
  };
  const getCardInfo = () => {
    card_Container.addEventListener("click", (e) => {
      console.log(e.target.textContent);
    });
  };
  add();
  deleteTask();
  selectPriority();
  getCardInfo();
  return {};
})();

window.arrayOfTasks = arrayOfTasks;
