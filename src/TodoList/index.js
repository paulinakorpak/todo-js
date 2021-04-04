export const TodoList = (element) => {
  const state = {
    todoItems: [],
    filter: 'all',
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

  const setFilter = (filter) => {
    state.filter = filter;
    render();
  };

  const filterTodoItems = () => {
    if (state.filter === 'done') {
      return state.todoItems.filter((todoItem) => todoItem.isCompleted());
    }
    if (state.filter === 'active') {
      return state.todoItems.filter((todoItem) => !todoItem.isCompleted());
    }

    return state.todoItems;
  };

  const render = () => {
    element.innerHTML = '';

    const todoItems = filterTodoItems();

    todoItems.forEach((todoItem) => {
      const liElement = document.createElement('li');
      liElement.classList.add('list-group-item');
      element.appendChild(liElement);

      todoItem.render(liElement);
    });

    Array.from(element.querySelectorAll('.delete')).forEach((button) => {
      button.addEventListener('click', deleteTodoItem);
    });
  };

  return { createTodoItem, setFilter, render };
};
