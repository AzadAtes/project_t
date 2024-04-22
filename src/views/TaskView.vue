<script setup lang="ts">
import { useTaskStore } from "../stores/taskStore.ts";
import Task from "../components/tasks/Task.vue";
const taskStore = useTaskStore();
</script>

<template>
	<ul data-name="initial-task-list" class="flex list-none flex-col gap-2 font-mono">
		<Task
			data-name="initial-task"
			class="rounded"
			v-for="task in taskStore.tasks"
			:task="task"
		/>
	</ul>
</template>

<style></style>
