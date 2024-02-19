<script setup lang="ts">
import { PropType, ref } from "vue";
import TaskList from "./TaskList.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
});

const showSubTasks = ref(false);
</script>

<template>
	<li>
		<h1
			class="mt-1 rounded border-b-4 border-blueish-dark-100 p-3"
			:class="props.task.subTasks !== undefined ? 'text-xl font-bold' : ''"
			@click="showSubTasks = !showSubTasks"
		>
			{{ props.task.name }}
		</h1>
		<TaskList
			v-show="showSubTasks"
			v-if="props.task.subTasks !== undefined"
			:tasks="props.task.subTasks"
		/>
	</li>
</template>

<style scoped></style>
