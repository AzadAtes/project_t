<script setup lang="ts">
import Task from "./Task.vue";
import { PropType, inject, Ref, onMounted, watchEffect } from "vue";

const props = defineProps({
	tasks: {
		type: Object as PropType<Task>,
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
console.log(props.tasks?.subTasks);

const topPaddingWidth = inject<Ref<number>>("top-padding-width");

onMounted(() => {
	const ulElement = document.querySelectorAll("ul");

	watchEffect(() => {
		if (topPaddingWidth && ulElement) {
			switch (true) {
				case topPaddingWidth.value > 35:
					ulElement.forEach((ulElement) => {
						// Apply styles to each component
						ulElement.style.paddingLeft = "35px";
					});
					break;
				case topPaddingWidth.value < 15:
					ulElement.forEach((ulElement) => {
						// Apply styles to each component
						ulElement.style.paddingLeft = "15px";
					});
					break;
				default:
					ulElement.forEach((ulElement) => {
						// Apply styles to each component
						//ulElement.style.marginLeft = topPaddingWidth.value + "px";
						ulElement.style.paddingLeft = topPaddingWidth.value + "px";
					});
			}
		}
	});
});
</script>

<template>
	<!-- TODO: lastIterationOfList ? 'py-2 ': 'mt-0'; and maybe a lighter background? OR: highlight only current/last list/item in focus mode and none in overview -->
	<ul data-name="task-list" class="relative mt-2 list-none gap-2 border-l-2 border-neutral-700">
		<Task
			class=""
			v-for="task in props.tasks"
			:key="task.id"
			:task="task"
			:count="count"
			@count-up="countUp"
		/>
	</ul>
</template>

<style scoped></style>
