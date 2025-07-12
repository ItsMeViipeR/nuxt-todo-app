<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="todo in todos" :key="todo.id">
      <Card :id="todo.id" :title="todo.title" :completed="todo.completed" />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Todos",
});

const { todos } = useTodos();
</script>

<style></style>
