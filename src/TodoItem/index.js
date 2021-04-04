import { template } from './template';

export const TodoItem = (title) => {
  const state = {
    id: Date.now(),
    title,
    completed: false,
  };

  const render = (element) => {
    element.innerHTML = template(state.id, state.title, state.completed);
  };

  return { render };
};
