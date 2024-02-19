<script setup lang="ts">
import Task from "./Task.vue";
import { PropType } from "vue";

const props = defineProps({
	tasks: {
		type: Object as PropType<Task[]>,
		required: false,
	},
});
</script>

<template>
	<ul
		data-name="task-list"
		class="relative ml-12 list-none before:absolute before:-left-12 before:z-0 before:h-full before:rounded before:border-l-2 before:border-dotted before:border-blueish-dark-100"
	>
		<Task v-for="task in props.tasks" :key="task.id" :task="task" />
	</ul>
</template>

<style scoped></style>
