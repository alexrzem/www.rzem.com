import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/views/Home.vue';

import Blog from '@/views/Blog.vue';

import Hobby from '@/views/Hobby.vue';
import HobbyMiniatures from '@/views/hobby/Miniatures.vue';
import HobbyProjects from '@/views/hobby/Projects.vue';

import Resume from '@/views/Resume.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/blog',
			name: 'blog',
			component: Blog,
		},
		{
			path: '/hobby',
			name: 'hobby',
			component: Hobby,
			children: [
				{
					path: 'miniatures',
					name: 'hobbyminiatures',
					component: HobbyMiniatures,
				},
				{
					path: 'projects',
					name: 'hobbyprojects',
					component: HobbyProjects,
				},		
			]
		},
		{
			path: '/resume',
			name: 'resume',
			component: Resume,
		},
	],
});

export default router;
