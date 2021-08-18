<template>
	<div class="bg-black h-screen flex overflow-hidden">
		<sidebar />
		<div class="flex flex-grow overflow-hidden p-2">
			<!-- Content goes here -->
			<slot />
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

import Sidebar from './Sidebar.vue';
import ProfileSidebar from './ProfileSidebar.vue';

export const CoreNavigation = [
	{
		name: 'Home',
		desc: '',
		to: { name: 'home' },
		icon: ['fal', 'house-user'],
	},
	{
		name: 'API',
		desc: '',
		to: { name: 'home' },
		icon: ['fab', 'codepen'],
	},
	{
		name: 'Config',
		desc: '',
		to: { name: 'home' },
		icon: ['fal', 'server'],
	},
	{
		name: 'OpenID Connect',
		desc: '',
		to: { name: 'home' },
		icon: ['fab', 'openid'],
	},
	{
		name: 'Tools',
		desc: '',
		to: { name: 'home' },
		icon: ['fal', 'tools'],
	},
];

export default {
	components: {
		Sidebar,
		ProfileSidebar,
	},
	setup() {
		return {
			CoreNavigation,
		};
	},
};
</script>
