<template>
	<div class="page">
		<h1>Hobby</h1>
		<div class="">
			<div class="border-b border-gray-600">
				<nav class="-mb-px flex space-x-8" aria-label="Tabs">
					<router-link v-for="tab in tabs" :key="tab.name" :to="{ name: tab.name }" class="tablink">
						<fa-icon :icon="[tab.current ? 'fas' : 'fal', tab.icon]" class="mr-2" />
						<span class="">{{ tab.label }}</span>
					</router-link>
				</nav>
			</div>
		</div>
		<router-view />
	</div>
</template>

<script>
import _ from 'lodash';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
	components: {},
	setup() {
		const route = useRoute();

		const tabs = ref([
			{ label: 'Miniatures', name: 'hobbyminiatures', icon: 'hammer-war', current: false },
			{ label: 'Projects', name: 'hobbyprojects', icon: 'hammer-war', current: true },
		]);

		watch(route, (newVal, oldVal) => {
			_.forEach(tabs.value, (tab) => {
				tab.current = _.eq(route.name, tab.name);
			});
		});

		return { tabs };
	},
};
</script>
