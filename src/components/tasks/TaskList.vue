<script setup lang="ts">
import Task from "./Task.vue";
import { PropType, inject, Ref, computed } from "vue";

const props = defineProps({
	tasks: {
		type: Array as PropType<Task[]>,
		required: false,
	},
});
const mainLeftPaddingWidth = inject<Ref<number>>("main-left-padding-width");
const leftPadding = computed(() => {
	return mainLeftPaddingWidth?.value + "px";
});
</script>

<template>
	<ul data-name="task-list" class="relative flex list-none flex-col gap-0.5 border-l-2 border-neutral-800" :style="{ paddingLeft: leftPadding }">
		<Task v-for="task in props.tasks" :key="task.id" :task="task" />
	</ul>
</template>

<style scoped></style>
