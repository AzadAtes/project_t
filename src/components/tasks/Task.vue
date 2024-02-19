<script setup lang="ts">
import { computed, PropType, ref } from "vue";
import TaskList from "./TaskList.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
});

const subTasksAreVisible = ref(false);
const subTasksAreExistent = computed(() => {
	return props.task.subTasks !== undefined;
});
const toggleSubtasks = () => {
	subTasksAreVisible.value = !subTasksAreVisible.value;
};
</script>

<template>
	<li class="rounded bg-blueish-dark-700">
		<h1
			class="relative z-10 mb-2 rounded bg-neutral-800 p-2"
			:class="subTasksAreExistent && subTasksAreVisible ? '' : ''"
			@click="toggleSubtasks"
		>
			{{ props.task.name }}
		</h1>
		<TaskList
			v-show="subTasksAreVisible"
			v-if="subTasksAreExistent"
			:tasks="props.task.subTasks"
		/>
	</li>
</template>

<style scoped></style>
