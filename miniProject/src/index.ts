console.log("Mini Todo Project");

const inputBox = document.getElementById("inputBox")! as HTMLInputElement;
const form = document.getElementById("todoFrom")! as HTMLFormElement;
const list = document.getElementById("list")! as HTMLLIElement;

interface Todo {
  text: string;
  complete: boolean;
}

const getTodos = (): Todo[] => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
};

const todos: Todo[] = getTodos();
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
const createTodo = (todo: Todo) => {
  const div = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.complete;

  const span = document.createElement("span");
  span.innerText = todo.text;

  if (todo.complete) {
    span.style.textDecoration = "line-through";
  }

  checkbox.addEventListener("change", () => {
    todo.complete = checkbox.checked;

    span.style.textDecoration = todo.complete
      ? "line-through"
      : "none";

    saveTodos();
  });

  div.append(checkbox);
  div.append(span);
  list.append(div);
};
const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();

  if (inputBox.value.trim() === "") return;
  const todo: Todo = {
    text: inputBox.value,
    complete: false
  };
  todos.push(todo);
  saveTodos();
  createTodo(todo);

  inputBox.value = "";
};

form.addEventListener("submit", handleSubmit);
todos.forEach(createTodo);
