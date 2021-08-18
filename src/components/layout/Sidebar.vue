<template>
	<div class="h-screen flex flex-shrink-0">
		<div class="flex flex-col flex-grow w-16">
			<div class="flex flex-col h-0 flex-1 overflow-y-auto bg-gray-600">
				<div class="flex-1 flex flex-col">
					<nav class="py-4 flex flex-col items-center space-y-2 my-auto">
						<router-link
							v-for="item in CoreNavigation"
							:key="item.name"
							:to="item.to"
							v-slot="{
								isActive,
								isExactActive,
							}"
						>
							<div
								:class="[{ 'bg-gray-700': isActive || isExactActive }, isActive || isExactActive ? 'hover:bg-blue-500' : 'hover:bg-gray-700']"
								class="flex items-center p-3 rounded-lg text-gray-200 shadow-md"
							>
								<fa-icon :icon="item.icon" size="lg" class="block mx-auto text-gray-200" />
							</div>
						</router-link>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export const CoreNavigation = [
	{
		name: 'Home',
		desc: '',
		to: { name: 'home' },
		icon: ['fal', 'house-user'],
	},
	{
		name: 'resume',
		desc: '',
		to: { name: 'resume' },
		icon: ['fal', 'id-card-alt'],
	},
	{
		name: 'blog',
		desc: '',
		to: { name: 'blog' },
		icon: ['fal', 'newspaper'],
	},
	{
		name: 'hobby',
		desc: '',
		to: { name: 'hobby' },
		icon: ['fal', 'swatchbook'],
	},
];

export default {
	components: {},
	setup() {
		return {
			CoreNavigation,
		};
	},
};
</script>
