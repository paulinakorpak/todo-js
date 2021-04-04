import { TodoItem } from '../TodoItem';

export const TodoForm = (element, createTodoItemCallback) => {
  const init = () => {
    element.addEventListener('keyup', createTodoItem);
  };

  const createTodoItem = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const todoItem = TodoItem(e.target.value);
      createTodoItemCallback(todoItem);

      e.target.value = '';
    }
  };

  return { init };
};
