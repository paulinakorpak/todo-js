import { template } from './template';

export const TodoItem = (title) => {
  const state = {
    id: Date.now(),
    title,
    completed: false,
  };

  const render = (element) => {
    element.innerHTML = template(state.id, state.title, state.completed);
    element.querySelector('input').addEventListener('change', () => toggleCompleted(element));
  };

  const toggleCompleted = (element) => {
    state.completed = !state.completed;
    render(element);
  };

  return { render };
};
