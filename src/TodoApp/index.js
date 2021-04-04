import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';
import { TodoFilters } from '../TodoFilters';

export const TodoApp = (element) => {
  let todoForm;
  let todoList;
  let todoFilters;

  const init = () => {
    const formElement = element.querySelector('header input');
    todoForm = TodoForm(formElement, createTodoItem);
    todoForm.init(createTodoItem);

    const listElement = element.querySelector('ul');
    todoList = TodoList(listElement);

    const filtersElement = element.querySelector('footer');
    todoFilters = TodoFilters(filtersElement, setTodoListFilter);
    todoFilters.init();
  };

  const createTodoItem = (todoItem) => {
    todoList.createTodoItem(todoItem);
  };

  const setTodoListFilter = (filter) => {
    todoList.setFilter(filter);
  };

  return { init };
};
