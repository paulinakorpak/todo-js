import { TodoList } from '../TodoList';

export const TodoApp = (element) => {
  const init = () => {
    const todoList = element.querySelector('ul');
    TodoList(todoList);
  };

  return { init };
};
