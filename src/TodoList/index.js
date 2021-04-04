export const TodoList = (element) => {
  const state = {
    todoItems: [],
  };

  const createTodoItem = (todoItem) => {
    state.todoItems.push(todoItem);
    render();
  };

  const render = () => {
    element.innerHTML = '';

    state.todoItems.forEach((todoItem) => {
      const liElement = document.createElement('li');
      liElement.classList.add('list-group-item');
      element.appendChild(liElement);

      todoItem.render(liElement);
    });
  };

  return { createTodoItem, render };
};
