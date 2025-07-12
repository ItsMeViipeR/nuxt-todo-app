import type { Todo } from "~/types/todos";

export const useTodos = () => {
  const todos = useState<Todo[]>("todos", () => []); // état partagé côté client/serveur Nuxt

  const fetchTodos = async () => {
    try {
      const data = await $fetch<Todo[]>("/api/todos");
      todos.value = data;
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  // Charger automatiquement si vide (évite de recharger inutilement)
  if (todos.value.length === 0) {
    fetchTodos();
  }

  const setTodos = (newTodos: Todo[]) => {
    todos.value = newTodos;
  };

  return {
    todos,
    setTodos,
    fetchTodos,
  };
};
