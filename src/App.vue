<script setup lang="ts">
import { ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import AppHeader from "./components/AppHeader.vue";

const sideBarIsShown = ref(true);
const darkThemeIsActive = ref(true);
</script>

<template>
	<div
		class="box-border h-full"
		:class="darkThemeIsActive ? 'bg-blueish-dark-900 text-white' : 'bg-white text-black'"
	>
		<div id="app-header-wrapper" class="fixed z-50 h-app-header w-full">
			<AppHeader />
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
			<div
				id="main-wrapper"
				class="flex min-h-full w-full before:flex-1"
				:class="sideBarIsShown ? 'after:flex-2' : 'after:flex-1'"
			>
				<main class="flex-1-1-main p-3">
					<RouterView />
				</main>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
