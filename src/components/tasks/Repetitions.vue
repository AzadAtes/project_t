<script setup lang="ts">
import { inject, onMounted, PropType, Ref, watchEffect } from "vue";

const props = defineProps({
	reps: {
		type: Array as PropType<Rep[]>,
		required: true,
	},
});

const mainLeftPaddingWidth = inject<Ref<number>>("main-left-padding-width");

onMounted(() => {
	const repsLeftPadding = document.querySelectorAll('[data-name="rep"]');

	watchEffect(() => {
		if (repsLeftPadding && mainLeftPaddingWidth) {
			//TODO: can this be optimized?
			repsLeftPadding.forEach((element) => {
				element.style.marginLeft = mainLeftPaddingWidth.value + "px"; // TODO: is there a proper fix for "Vue: Property style does not exist on type Element"?
			});
		}
	});
});
</script>

<template>
	<div class="mx-2 flex flex-1 border-t-2 border-neutral-900">
		<ul data-name="rep-list" class="flex flex-1 flex-col pb-2">
			<li data-name="rep" v-for="rep in props.reps" class="flex border-b-2 border-neutral-900 px-1 py-0.5 font-light text-orange-300">
				<p class="pr-4">{{ rep.name }}</p>
				<p>{{ rep.count }}</p>
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
