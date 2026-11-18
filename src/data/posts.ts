export type Post = {
	title: string;
	date: string;
	tagline: string;
	link: string;
	image: string;
	tags?: string[];
	highlight?: boolean;
};

// link and image are relative to the site's base path
export const posts: Post[] = [
	{
		title: 'What Is Good Synthetic Data for a VLA?',
		date: '2026-11-08',
		tagline:
			'Which synthetic demos make a vision-language-action model act well after training? The loss appears only where the outcome is decided, the decision follows what the representation carries, and an unresolved decision drives the robot out of the data.',
		link: '/good-synthetic-data-vla/',
		image: '/thumbs/good-synthetic-data-vla.png',
		tags: ['VLA', 'Synthetic Data', 'Flow Matching'],
	},
	{
		title: 'Why Diffusion Models?',
		date: '2026-10-27',
		tagline:
			'Why did diffusion models appear? Every earlier family had to choose a distribution we can write down or one that fits the data; diffusion gets both by writing a path of small Gaussian steps instead of one shape. Part 1 of 6.',
		link: '/why-diffusion-models/',
		image: '/thumbs/why-diffusion-models.png',
		tags: ['Diffusion', 'Probabilistic Modeling'],
	},
];
