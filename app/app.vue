<template>
	<div>
		<NuxtRouteAnnouncer />
		<ThemeNavbar />
		<main class="grid grid-cols-1 lg:grid-cols-5">
			<div :class="['fixed top-0 left-0 h-screen transition-transform duration-300', { 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen }]">
				<ThemeSidebar />
			</div>
			<div class="col-span-4 transition-transform duration-300" :class="{ 'ml-64': isSidebarOpen, 'ml-0': !isSidebarOpen }">
				<NuxtPage />
				<button @click="toggleSidebar" class="lg:hidden">Toggle Sidebar</button>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
	isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style scoped>
/* 如果需要其他样式，可以在这里添加 */
</style>