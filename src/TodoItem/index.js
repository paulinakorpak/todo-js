export const TodoItem = (title) => {
  const state = {
    id: Date.now(),
    title,
    completed: false,
  };
};
