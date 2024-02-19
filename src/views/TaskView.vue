<script setup lang="ts">
import { useTaskStore } from "../stores/taskStore.ts";
import Task from "../components/tasks/Task.vue";
const taskStore = useTaskStore();
</script>

<template>
	<div class="mt-16 flex w-full list-none flex-col gap-2 font-mono">
		<Task v-for="task in taskStore.tasks" :task="task" />
	</div>
</template>

<style scoped></style>
