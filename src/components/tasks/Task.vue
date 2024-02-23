<script setup lang="ts">
import { computed, PropType, ref, defineEmits } from "vue";
import TaskList from "./TaskList.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
	count: {
		type: Number,
		required: true,
	},
});

const emit = defineEmits(["countUp"]);
emit("countUp");
console.log(props.count);
const subTasksAreVisible = ref(false);
const subTasksAreExistent = computed(() => {
	return props.task.subTasks !== undefined;
});
const toggleSubtasks = () => {
	subTasksAreVisible.value = !subTasksAreVisible.value;
};
</script>

<template>
	<li>
		<h1
			class="relative z-10 rounded bg-neutral-800 p-2"
			:class="subTasksAreExistent && subTasksAreVisible ? '' : ''"
			@click="toggleSubtasks"
		>
			{{ props.task.name }}
		</h1>
		<TaskList
			v-show="subTasksAreVisible"
			v-if="subTasksAreExistent"
			:tasks="props.task.subTasks"
			:count="props.count"
		/>
	</li>
</template>

<style scoped></style>
