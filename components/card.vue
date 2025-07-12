<template>
  <div
    class="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 overflow-hidden"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-0 left-1/2 w-3/4 h-1/3 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-2xl opacity-60 -translate-x-1/2"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-1/3 h-1/4 bg-gradient-to-tr from-cyan-400/40 to-transparent rounded-full blur-xl opacity-40"
      ></div>
    </div>
    <div class="relative z-10">
      <h2
        class="text-2xl font-bold text-white mb-2 drop-shadow flex items-center gap-2"
      >
        📋 {{ title }}
      </h2>
      <p class="text-white/80">
        Status: {{ completed ? "Completed" : "Pending" }}
      </p>
      <div v-if="todo?.completed === false">
        <Button
          @click="toggleTodo(todo.id)"
          class="bg-green-600 hover:bg-green-600 hover:cursor-pointer"
        >
          {{ todo?.completed ? "Mark as Pending" : "Mark as Completed" }}
        </Button>
      </div>
      <div v-else>
        <Button
          variant="destructive"
          @click="toggleTodo(todo?.id!)"
          class="hover:cursor-pointer"
        >
          {{ todo?.completed ? "Mark as Pending" : "Mark as Completed" }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Todo } from "~/types/todos";
import { Button } from "~/components/ui/button";

const props = defineProps<Todo>();

const { todos, setTodos } = useTodos();

const todo = todos.value.find((todo) => todo.id === props.id);

const toggleTodo = (id: number) => {
  const todo = todos.value.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    setTodos([...todos.value]); // Update the state with the new todos array
  }
};
</script>
