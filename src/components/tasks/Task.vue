<script setup lang="ts">
import { computed, PropType, ref } from "vue";
import TaskList from "./TaskList.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
});

const detailsAreVisible = ref(false);
const hasSubTasks = computed(() => {
	return !!props.task.subTasks?.length;
});
const hasDescription = computed(() => {
	return !!props.task.description;
});
const toggleDetails = () => {
	detailsAreVisible.value = !detailsAreVisible.value;
};
</script>

<template>
	<li data-name="task">
		<div class="rounded bg-neutral-800">
			<h1 class="p-2 text-orange-300" @click="toggleDetails">
				{{ props.task.name }}
			</h1>
			<p class="px-2 pb-2 text-xs font-light" v-if="hasDescription" v-show="detailsAreVisible">
				{{ props.task.description }}
			</p>
		</div>
		<TaskList class="mt-0.5" :tasks="props.task.subTasks" v-if="hasSubTasks" v-show="detailsAreVisible" />
	</li>
</template>
