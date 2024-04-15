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
	<ul class="flex w-full list-none flex-col gap-2 pl-0 font-mono">
		<Task
			data-name="initial-task"
			class="rounded p-0"
			v-for="task in taskStore.tasks"
			:task="task"
			:count="count"
			@count-up="countUp"
		/>
	</ul>
</template>

<style>
/*[data-name="initial-task"] > [data-name="details"] > [data-name="task-list"] {
	border: none;
}*/
</style>
