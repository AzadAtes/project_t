<script setup lang="ts">
import { onMounted, ref, provide } from "vue";
import Sidebar from "./components/Sidebar.vue";
import AppHeader from "./components/AppHeader.vue";

const sideBarIsShown = ref(false);

const leftPaddingWidth = ref(0);
provide("main-left-padding-width", leftPaddingWidth);

onMounted(() => {
	const mainLeftPadding = document.querySelector("#main-left-padding");
	const mainWrapper = document.getElementById("main-wrapper");

	if (mainLeftPadding) {
		const resizeObserver = new ResizeObserver((entries) => {
			leftPaddingWidth.value = entries[0].contentRect.width;
			if (mainWrapper) {
				mainWrapper.style.paddingTop = entries[0].contentRect.width + "px";
				mainWrapper.style.paddingBottom = entries[0].contentRect.width + "px";
			}
		});
		resizeObserver.observe(mainLeftPadding);
	}
});
</script>

<template>
	<div id="app-inner" class="h-full bg-neutral-900 text-white">
		<div id="app-header-wrapper" @click="sideBarIsShown = !sideBarIsShown" class="fixed z-50 h-app-header w-full">
			<AppHeader />
		</div>
		<div id="app-content" class="relative top-app-header flex min-h-app-content bg-inherit">
			<div id="sidebar-wrapper" v-show="sideBarIsShown" class="min-h-full flex-0-0-sidebar">
				<Sidebar />
			</div>
			<div id="main-wrapper" class="flex min-h-full flex-1">
				<div id="main-left-padding" class="flex-0-1-main-padding"></div>
				<main id="main" class="flex-1-1.25-main h-full">
					<RouterView />
				</main>
				<div id="main-right-padding" class="flex-0-1-main-padding"></div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
