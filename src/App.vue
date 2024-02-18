<script setup lang="ts">
import { ref } from "vue";

const sideBarIsShown = ref(true);
const darkThemeIsActive = ref(true);
</script>

<template>
	<div
		class="box-border h-full"
		:class="darkThemeIsActive ? 'bg-black text-white' : 'bg-white text-black'"
	>
		<div id="app-header-wrapper" class="h-app-header fixed z-50 w-full">
			<!-- AppHeader -->
		</div>
		<div
			id="app-content"
			class="top-app-header min-h-app-content relative flex w-full bg-inherit"
		>
			<div id="sidebar-placeholder" v-show="sideBarIsShown" class="flex-0-0-sidebar h-full">
				<div id="sidebar-wrapper" class="w-sidebar fixed z-50 h-full">
					<!-- Sidebar -->
				</div>
			</div>
			<div
				id="main-wrapper"
				class="flex min-h-full w-full before:flex-1"
				:class="sideBarIsShown ? 'after:flex-2' : 'after:flex-1'"
			>
				<main class="flex-1-0-main">
					<RouterView />
				</main>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
