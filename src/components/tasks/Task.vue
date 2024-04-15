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
const detailsAreVisible = ref(false);
const subTasksAreExistent = computed(() => {
	return props.task.subTasks !== undefined;
});
const descriptionIsExistent = computed(() => {
	return props.task.description !== undefined;
});
const toggleSubtasks = () => {
	detailsAreVisible.value = !detailsAreVisible.value;
};
</script>

<template>
	<li data-name="task" class="rounded">
		<h1
			class="relative z-10 rounded bg-neutral-800 p-2 text-blue-200"
			:class="[
				descriptionIsExistent && detailsAreVisible ? 'rounded-b-none' : '',
				descriptionIsExistent || subTasksAreExistent ? 'font-light' : 'font-light',
			]"
			@click="toggleSubtasks"
		>
			{{ props.task.name }}
		</h1>
		<div data-name="details" v-show="detailsAreVisible">
			<p
				v-if="descriptionIsExistent"
				class="rounded-b bg-neutral-800 p-2 pt-1 text-xs font-light"
			>
				{{ props.task.description }}
			</p>
			<TaskList
				v-if="subTasksAreExistent"
				:tasks="props.task.subTasks"
				:count="props.count"
			/>
		</div>
	</li>
</template>

<style scoped></style>
