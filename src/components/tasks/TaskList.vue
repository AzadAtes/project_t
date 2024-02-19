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
	<ul class="list-none">
		<Task
			data-name="task-list"
			class="ml-12 mt-2"
			v-for="task in props.tasks"
			:key="task.id"
			:task="task"
		/>
	</ul>
</template>

<style scoped>
ul {
	position: relative;
}
ul::before {
	position: absolute;
	top: 10px;
	left: 0px;
	content: " ";
	border-left: 2px dotted #212023;
	border-bottom-left-radius: 4px;
	height: calc(100% - 20px);
}
</style>
