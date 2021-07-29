<template>
	<div class="container mx-auto bg-black">
		<header class="bg-white shadow">
			<div class=" py-6 px-4 sm:px-6 lg:px-8">
				<h1 class="text-3xl font-bold text-gray-900">
					Dashboard
				</h1>
			</div>
		</header>

		<main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
			<slot />
		</main>
	</div>
</template>

<script>
import { ref } from 'vue';

import ProfileSidebar from './ProfileSidebar.vue';

export default {
	components: {
		ProfileSidebar,
	},
	setup() {
		return {};
	},
};
</script>
