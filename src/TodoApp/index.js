import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';

export const TodoApp = (element) => {
  const init = () => {
    const todoForm = element.querySelector('header input');
    TodoForm(todoForm).init();

    const todoList = element.querySelector('ul');
    TodoList(todoList);
  };

  return { init };
};
