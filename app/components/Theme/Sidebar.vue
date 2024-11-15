<template>
	<aside class="h-svh border-r overflow-y-auto lg:sticky lg:top-3 p-6 space-y-3">
		<template v-for="item in navigation" :key="item.title">
			<div v-if="item.children && item.children.length">
				<div>{{ item.title }}</div>
				<ul class="border-l pl-3">
					<template v-for="child in item.children" :key="child.title">
						<li class="my-3">
							<NuxtLink class="text-inherit hover:text-link" :to="child._path">{{ child.title }}</NuxtLink>
						</li>
					</template>
				</ul>
			</div>
			<NuxtLink v-else class="text-inherit hover:text-link" :to="item._path">{{ item.title }}</NuxtLink>
		</template>
	</aside>
</template>

<script setup lang="ts">
interface NavigationItem {
	title: string;
	_path: string;
	children?: NavigationItem[]
}
const { data: navigation } = await useAsyncData<NavigationItem[]>('navigation', () => fetchContentNavigation());
</script>
