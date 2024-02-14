<script setup lang="ts"></script>

<template>
	<div
		id="header"
		class="fixed z-50 flex h-header w-full items-center justify-center bg-black"
	></div>
	<div class="relative top-header flex min-h-content-wrapper justify-center bg-black">
		<main class="min-w-main max-w-main flex-1">
			<RouterView />
		</main>
	</div>
</template>

<style scoped></style>
