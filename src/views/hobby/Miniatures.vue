<template>
	<div class="subpage">
		<h2>Miniatures</h2>

		<h3 class="mt-4 border-b border-gray-600 text-codered"><fa-icon :icon="['fab', 'patreon']" class="mr-2" /> Patreon</h3>
		<div class="">
			<ul role="list" class="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<li v-for="patreon of patreons" :key="patreon.label" class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
					<div class="flex-1 flex flex-col p-8">
						<img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full" :src="patreon.logo" alt="" />
						<h3 class="mt-6 text-gray-900 text-lg font-medium">{{ patreon.label }}</h3>
						<div class="flex gap-2 justify-center">
						<span v-for="tag of patreon.tags" :key="tag" class="px-2 py-1 text-blue-800 text-xxs font-mono font-medium bg-blue-100 rounded-md">{{ tag }}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<h3 class="mt-4 border-b border-gray-600 text-blue-400"><fa-icon :icon="['fad', 'shopping-bag']" class="mr-2" /> Stores</h3>
		<div v-for="store of stores" :key="store.label">
			{{ store.label }}
		</div>
	</div>
</template>

<script>
import _ from 'lodash';
import { ref } from 'vue';

export default {
	components: {},
	setup() {
		const patreons = ref([
			{ label: 'Soul Forge Studio', href: 'https://www.patreon.com/soulforgestudio', logo: '/logos/soulforgestudio.png', tags: ['BATTLEFLEET GOTHIC', '1/200'], icon: 'hammer-war' },
			{ label: 'Dark Fire Designs', href: 'https://www.patreon.com/darkfiredesigns', logo: '/logos/darkfiredesigns.png', tags: ['STAR WARS', '32mm'], icon: 'hammer-war' },
			{ label: 'Seb Miniatures', href: 'https://www.patreon.com/sebminiatures', logo: '/logos/sebminiatures.png', tags: ['STAR WARS', '32mm'], icon: 'hammer-war' },
			{ label: 'Papsikels Miniatures', href: 'https://www.patreon.com/papsikels', logo: '/logos/papsikels.png', tags: ['SCI FI', '28mm'], icon: 'hammer-war' },
			{ label: 'Madox', href: 'https://www.patreon.com/madox_tabletopminis', logo: '/logos/madox_tabletopminis.png', tags: ['STAR WARS', '32mm'], icon: 'hammer-war' },
			{ label: 'Wakes Emporium', href: 'https://www.patreon.com/WakesEmporium', logo: '/logos/WakesEmporium.jpg', tags: ['SCI FI', 'EPIC'], icon: 'hammer-war' },
		]);

		const stores = ref([
			{ label: 'Miniatures', name: 'hobbyminiatures', icon: 'hammer-war' },
			{ label: 'Projects', name: 'hobbyprojects', icon: 'hammer-war' },
		]);

		return { patreons, stores };
	},
};
</script>
