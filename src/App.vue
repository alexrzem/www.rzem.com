<template>
	<primary>
		<router-view />
	</primary>
</template>

<script>
import Primary from './components/layout/Primary.vue';

export default {
	components: {
		Primary,
	},
	setup() {
		return {};
	},
};
</script>
