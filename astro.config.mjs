// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://orikwon-dev.github.io',
	integrations: [
		starlight({
			title: "Ori's Devlog",
			sidebar: [
				{
					label: 'CS',
					link: '/cs/',
				},
				{
					label: 'Unity',
					link: '/unity/',
				},
				{
					label: 'PS',
					link: '/ps/',
				},
				{
					label: '기타',
					link: '/etc/',
				},
				{
					label: '태그 목록',
					link: '/tags/',
				},
			],
		}),
	],
});
