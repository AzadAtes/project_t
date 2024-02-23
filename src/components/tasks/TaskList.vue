<script setup lang="ts">
import Task from "./Task.vue";
import { PropType, inject, Ref, onMounted, watchEffect, defineEmits } from "vue";

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
console.log(props.count);

const topPaddingWidth = inject<Ref<number>>("top-padding-width");

onMounted(() => {
	const ulElement = document.querySelectorAll("ul");

	watchEffect(() => {
		if (topPaddingWidth && ulElement) {
			switch (true) {
				case topPaddingWidth.value > 45:
					ulElement.forEach((ulElement) => {
						// Apply styles to each component
						ulElement.style.marginLeft = "45px";
					});
					break;
				case topPaddingWidth.value < 15:
					ulElement.forEach((ulElement) => {
						// Apply styles to each component
						ulElement.style.marginLeft = "15px";
					});
					break;
				default:
					ulElement.forEach((ulElement) => {
						// Apply styles to each component
						ulElement.style.marginLeft = topPaddingWidth.value + "px";
					});
			}
		}
	});
});
</script>

<template>
	<ul data-name="task-list" class="relative ml-9 list-none">
		<Task
			class="mt-2"
			v-for="task in props.tasks"
			:key="task.id"
			:task="task"
			:count="count"
			@count-up="countUp"
		/>
	</ul>
</template>

<style scoped></style>
