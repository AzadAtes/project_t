<script setup lang="ts">
import { onMounted, ref, provide, Ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import AppHeader from "./components/AppHeader.vue";

const sideBarIsShown = ref(false);
const darkThemeIsActive = ref(true);

const topPaddingWidth = ref(0);
provide("top-padding-width", topPaddingWidth);

onMounted(() => {
	const leftPaddingElement = document.querySelector("#left-padding");
	const rightPaddingElement = document.querySelector("#right-padding");

	if (leftPaddingElement && rightPaddingElement) {
		const observer = new ResizeObserver((entries) => {
			document.getElementById("top-padding")!.style.minHeight =
				entries[0].contentRect.width + "px";
			topPaddingWidth.value = entries[0].contentRect.width;

			if (entries[1].contentRect.width > 10) {
				document.getElementById("bottom-padding")!.style.minHeight =
					entries[1].contentRect.width - 10 + "px";
			}
		});
		observer.observe(leftPaddingElement);
		observer.observe(rightPaddingElement);
	}
});
</script>

<template>
	<div
		class="h-full"
		:class="darkThemeIsActive ? 'bg-neutral-910 text-white' : 'bg-white text-black'"
	>
		<div id="app-header-wrapper" class="fixed z-50 h-app-header w-full">
			<AppHeader @click="sideBarIsShown = !sideBarIsShown" />
		</div>
		<div
			id="app-content"
			class="relative top-app-header flex min-h-app-content w-full bg-inherit"
		>
			<div id="sidebar-placeholder" v-show="sideBarIsShown" class="h-full flex-0-0-sidebar">
				<div id="sidebar-wrapper" class="fixed z-50 h-full w-sidebar">
					<Sidebar />
				</div>
			</div>
			<div class="flex h-full w-full flex-col">
				<div id="top-padding"></div>
				<div id="main-wrapper" class="flex min-h-full w-full">
					<div id="left-padding" class="flex-1"></div>

					<main id="main" ref="target" class="flex-1-1-main">
						<RouterView />
					</main>
					<div id="right-padding" :class="sideBarIsShown ? 'flex-2' : 'flex-1'"></div>
				</div>
				<div id="bottom-padding"></div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
