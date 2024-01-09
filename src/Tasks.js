export const arrayOfTasks = [];
export class Task {
  constructor(title, description, dueDate, priority) {
    this.id = this.createID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  createID() {
    return "id" + `${arrayOfTasks.length}`.padStart(2, "0");
  }
  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getDueDate() {
    return this.dueDate;
  }
  getPriority() {
    return this.priority;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }

  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  setPriority(newPriority) {
    this.priority = newPriority;
  }
}

export class toDoListActions {
  static addTask(object) {
    arrayOfTasks.push(object);
  }

  static deleteTask(id) {
    const elementToDelete = arrayOfTasks.findIndex((i) => i.getId() === id);
    arrayOfTasks.splice(elementToDelete, 1);
  }
}
