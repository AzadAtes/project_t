<script setup lang="ts"></script>

<template>
	<div
		id="header"
		class="fixed z-50 flex h-header w-full items-center justify-center bg-black"
	></div>
	<div
		id="content-wrapper"
		class="min-h-content-wrapper relative top-header flex justify-center bg-black"
	>
		<div id="main-content" class="min-w-main-content max-w-main-content flex-1">
			<RouterView />
		</div>
	</div>
</template>

<style scoped></style>
