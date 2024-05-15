<script setup lang="ts">
import Task from "./Task.vue";
import { PropType, inject, Ref, computed } from "vue";

const props = defineProps({
	tasks: {
		type: Array as PropType<Task[]>,
		required: false,
	},
});
const mainLeftPaddingWidth = inject<Ref<number>>("main-left-padding-width")
const leftPadding = computed(() => { return mainLeftPaddingWidth?.value + "px"})

</script>

<template>
	<ul data-name="sub-task-list" class="relative list-none border-l-2 border-neutral-800">
		<Task class="mt-1" v-for="task in props.tasks" :key="task.id" :task="task" />
	</ul>
</template>

<style scoped>
[data-name="sub-task-list"]{
	padding-left: v-bind('leftPadding');
}
</style>