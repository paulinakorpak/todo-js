export const TodoFilters = (element, setTodoListFilterCallback) => {
  const init = () => {
    Array.from(element.querySelectorAll('a')).map((filter) => filter.addEventListener('click', setFilter));
  };

  const setFilter = (e) => {
    const { filter } = e.target.dataset;
    setTodoListFilterCallback(filter);
  };

  return { init };
};
