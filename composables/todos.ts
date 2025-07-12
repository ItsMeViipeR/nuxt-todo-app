import type { Todo } from "~/types/todos";

export const useTodos = () => {
  let todos = ref<Todo[]>([]);
  const fetchTodos = () => {
    $fetch<Todo[]>("/api/todos")
      .then((response) => {
        todos.value = response;
      })
      .catch((error) => {
        console.error("Failed to fetch todos:", error);
      });
  };

  fetchTodos();

  const setTodos = (newTodos: Todo[]) => {
    todos.value = newTodos;
  };

  return {
    todos,
    setTodos,
  };
};
