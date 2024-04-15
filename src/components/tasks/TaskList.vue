<script setup lang="ts">
import Task from "./Task.vue";
import { PropType, inject, Ref, onMounted, watchEffect, defineEmits } from "vue";

const props = defineProps({
	tasks: {
		type: Array as PropType<Task[]>,
		required: false,
	},
	count: {
		type: Number,
		required: true,
	},
});

const emit = defineEmits(["countUp"]);
const countUp = () => {
	emit("countUp");
};
console.log(props.count);

const topPaddingWidth = inject<Ref<number>>("top-padding-width");

onMounted(() => {
	const subTaskListElements = document.querySelectorAll('[data-name="sub-task-list"]');

	watchEffect(() => {
		if (topPaddingWidth && subTaskListElements) {
			switch (true) {
				case topPaddingWidth.value > 45:
					subTaskListElements.forEach((element) => {
						element.style.paddingLeft = "45px";
					});
					break;
				case topPaddingWidth.value < 15:
					subTaskListElements.forEach((element) => {
						element.style.paddingLeft = "15px";
					});
					break;
				default:
					subTaskListElements.forEach((element) => {
						element.style.paddingLeft = topPaddingWidth.value + "px";
					});
			}
		}
	});
});
</script>

<template>
	<ul data-name="sub-task-list" class="relative list-none border-l-2 border-neutral-800 pl-9">
		<Task
			class="mt-1"
			v-for="task in props.tasks"
			:key="task.id"
			:task="task"
			:count="count"
			@count-up="countUp"
		/>
	</ul>
</template>

<style scoped></style>
