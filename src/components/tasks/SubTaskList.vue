<script setup lang="ts">
import Task from "./Task.vue";
import { PropType, inject, Ref, onMounted, watchEffect } from "vue";

const props = defineProps({
	tasks: {
		type: Array as PropType<Task[]>,
		required: false,
	},
});

const mainLeftPaddingWidth = inject<Ref<number>>("main-left-padding-width");

onMounted(() => {
	const subTaskListElements = document.querySelectorAll('[data-name="sub-task-list"]');

	watchEffect(() => {
		if (mainLeftPaddingWidth && mainLeftPaddingWidth.value !== 0 && subTaskListElements) {
			//TODO: can this be optimized?
			subTaskListElements.forEach((element) => {
				element.style.paddingLeft = mainLeftPaddingWidth.value + "px"; // TODO: is there a proper fix for "Vue: Property style does not exist on type Element"?
			});
		}
	});
});
</script>

<template>
	<ul data-name="sub-task-list" class="relative list-none border-l-2 border-neutral-800">
		<Task class="mt-1" v-for="task in props.tasks" :key="task.id" :task="task" />
	</ul>
</template>

<style scoped></style>
