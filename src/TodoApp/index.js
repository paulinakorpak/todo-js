import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';

export const TodoApp = (element) => {
  let todoForm;
  let todoList;

  const init = () => {
    const formElement = element.querySelector('header input');
    todoForm = TodoForm(formElement, createTodoItem);
    todoForm.init(createTodoItem);

    const listElement = element.querySelector('ul');
    todoList = TodoList(listElement);
  };

  const createTodoItem = (todoItem) => {
    todoList.createTodoItem(todoItem);
  };

  return { init };
};
