<script setup lang="ts">
import { useTaskStore } from "../stores/taskStore.ts";
import Task from "../components/tasks/Task.vue";
import { ref } from "vue";
const taskStore = useTaskStore();

let count = 0;
const countUp = () => {
	count++;
};
</script>

<template>
	<div class="flex w-full list-none flex-col gap-1 font-mono">
		<Task
			class="rounded bg-neutral-900 p-1"
			v-for="task in taskStore.tasks"
			:task="task"
			:count="count"
			@count-up="countUp"
		/>
	</div>
</template>

<style scoped></style>
