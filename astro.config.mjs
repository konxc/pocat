// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://pocat-dev.github.io',
	base: '/',
	integrations: [
		starlight({
			title: 'Pocat Documentation',
			description: '🎬 AI Video Clipper - Transform long YouTube videos into engaging clips',
			favicon: '/favicon.ico',
			logo: {
				src: './src/assets/pocat-logo.svg',
				replacesTitle: true,
			},
			customCss: [
				'./src/styles/custom.css',
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '32x32',
						href: '/favicon-32x32.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '16x16',
						href: '/favicon-16x16.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						sizes: '180x180',
						href: '/apple-touch-icon.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'manifest',
						href: '/site.webmanifest',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#3b82f6',
					},
				},
			],
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/pocat-dev/pocat-dev' 
				},
				{
					icon: 'github',
					label: 'API Repository',
					href: 'https://github.com/pocat-dev/pocat-api'
				}
			],
			sidebar: [
				{
					label: '🚀 Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
						{ label: 'Installation', slug: 'getting-started/installation' },
					],
				},
				{
					label: '📚 API Documentation',
					items: [
						{ label: 'Overview', slug: 'api/overview' },
						{ label: 'Authentication', slug: 'api/authentication' },
						{ label: 'Video Download', slug: 'api/video-download' },
						{ label: 'Quality Options', slug: 'api/quality-options' },
						{ label: 'Error Handling', slug: 'api/error-handling' },
					],
				},
				{
					label: '🔧 Downloaders',
					items: [
						{ label: 'yt-dlp (Recommended)', slug: 'downloaders/yt-dlp' },
						{ label: 'YouTube API', slug: 'downloaders/youtube-api' },
						{ label: 'ytdl-core', slug: 'downloaders/ytdl-core' },
						{ label: 'Puppeteer', slug: 'downloaders/puppeteer' },
					],
				},
				{
					label: '🎯 Examples',
					items: [
						{ label: 'Basic Usage', slug: 'examples/basic-usage' },
						{ label: 'Quality Selection', slug: 'examples/quality-selection' },
						{ label: 'Batch Processing', slug: 'examples/batch-processing' },
						{ label: 'Integration Guide', slug: 'examples/integration' },
					],
				},
				{
					label: '📖 Guides',
					items: [
						{ label: 'Migration from youtube-dl', slug: 'guides/migration-from-youtube-dl' },
						{ label: 'Deployment Guide', slug: 'guides/deployment' },
						{ label: 'Performance Optimization', slug: 'guides/example' },
						{ label: 'Troubleshooting', slug: 'guides/troubleshooting' },
					],
				},
				{
					label: '🛠️ Development',
					items: [
						{ label: 'Setup Environment', slug: 'development/setup' },
						{ label: 'Contributing', slug: 'development/contributing' },
						{ label: 'Architecture', slug: 'development/architecture' },
					],
				},
				{
					label: '📖 Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
