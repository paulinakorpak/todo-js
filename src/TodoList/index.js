export const TodoList = (element) => {
  const state = {
    todoItems: [],
  };

  const createTodoItem = (todoItem) => {
    state.todoItems.push(todoItem);
    render();
  };

  const deleteTodoItem = (e) => {
    const { id } = e.target.closest('div').dataset;
    state.todoItems = state.todoItems.filter((todoItem) => todoItem.getId() !== id);

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

    Array.from(element.querySelectorAll('.delete')).forEach((button) => {
      button.addEventListener('click', deleteTodoItem);
    });
  };

  return { createTodoItem, render };
};
