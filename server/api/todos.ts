import { Todo } from "~/types/todos";

export default defineEventHandler(async (event) => {
  const todos: Todo[] = [
    { id: 1, title: "Learn Nuxt 3", completed: false },
    { id: 2, title: "Build a Todo App", completed: true },
    { id: 3, title: "Deploy to Vercel", completed: false },
  ];
  return todos;
});
