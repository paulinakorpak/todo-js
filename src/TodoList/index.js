export const TodoList = (element) => {
  const state = {
    todoItems: [],
  };

  const createTodoItem = (todoItem) => {
    state.todoItems.push(todoItem);
  };

  return { createTodoItem };
};
