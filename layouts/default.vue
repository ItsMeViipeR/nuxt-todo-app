<template>
  <div class="min-h-screen min-w-screen">
    <div
      class="grid min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style="grid-template-rows: 20px 1fr 20px"
    >
      <main
        class="flex flex-col gap-[16px] row-start-2 items-center justify-center h-full"
        style="min-height: 0"
      >
        <div class="w-full flex justify-center">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
