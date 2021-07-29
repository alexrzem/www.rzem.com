<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<template>
	<TransitionRoot as="template" :show="sidebarOpen">
		<Dialog as="div" static class="fixed inset-0 flex z-40 lg:hidden" @close="sidebarOpen = false" :open="sidebarOpen">
			<TransitionChild
				as="template"
				enter="transition-opacity ease-linear duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="transition-opacity ease-linear duration-300"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
			</TransitionChild>
			<TransitionChild
				as="template"
				enter="transition ease-in-out duration-300 transform"
				enter-from="-translate-x-full"
				enter-to="translate-x-0"
				leave="transition ease-in-out duration-300 transform"
				leave-from="translate-x-0"
				leave-to="-translate-x-full"
			>
				<div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
					<TransitionChild
						as="template"
						enter="ease-in-out duration-300"
						enter-from="opacity-0"
						enter-to="opacity-100"
						leave="ease-in-out duration-300"
						leave-from="opacity-100"
						leave-to="opacity-0"
					>
						<div class="absolute top-0 right-0 -mr-12 pt-2">
							<button
								class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								@click="sidebarOpen = false"
							>
								<span class="sr-only">Close sidebar</span>
								<fa-icon :icon="['fal', 'cross']" class="h-6 w-6 text-white" title="XIcon" />
							</button>
						</div>
					</TransitionChild>
					<div class="flex-shrink-0 flex items-center px-4">
						<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg" alt="Workflow" />
					</div>
					<div class="mt-5 flex-1 h-0 overflow-y-auto">
						<nav class="px-2">
							<div class="space-y-1">
								<a
									v-for="item in navigation"
									:key="item.name"
									:href="item.href"
									:class="[
										item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
										'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md',
									]"
									:aria-current="item.current ? 'page' : undefined"
								>
									<fa-icon :icon="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" />
									{{ item.name }}
								</a>
							</div>
							<div class="mt-8">
								<h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="teams-headline">
									Teams
								</h3>
								<div class="mt-1 space-y-1" role="group" aria-labelledby="teams-headline">
									<a
										v-for="team in teams"
										:key="team.name"
										:href="team.href"
										class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
									>
										<span :class="[team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full']" aria-hidden="true" />
										<span class="truncate">
											{{ team.name }}
										</span>
									</a>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</TransitionChild>
			<div class="flex-shrink-0 w-14" aria-hidden="true">
				<!-- Dummy element to force sidebar to shrink to fit close icon -->
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script>
import { ref } from 'vue';
import { Dialog, DialogOverlay, Menu, MenuButton, MenuItem, MenuItems, TransitionChild, TransitionRoot } from '@headlessui/vue';

const navigation = [
	{ name: 'Home', href: '#', icon: ['fal', 'home-lg'], current: true },
	{ name: 'My tasks', href: '#', icon: ['fal', 'list'], current: false },
	{ name: 'Recent', href: '#', icon: ['fal', 'clock'], current: false },
];

export default {
	components: {
		Dialog,
		DialogOverlay,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		TransitionChild,
		TransitionRoot,
	},
	setup() {
		const sidebarOpen = ref(false);

		return {
			navigation,
			sidebarOpen,
		};
	},
};
</script>
