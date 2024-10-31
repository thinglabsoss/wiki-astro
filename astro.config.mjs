import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://thinglabs.tech',
  integrations: [
    starlight({
      title: 'ThingLabs',
      logo: {
        src: './src/assets/thinglabs-logo.svg',
        replacesTitle: true,
      },
      customCss: ['./src/tailwind.css'],
      social: {
        discord: 'https://tl.mt/d',
        github: 'https://github.com/thinglabsoss',
      },
      sidebar: [
        {
          label: 'First Steps',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Setting up',
              slug: 'first-steps/setup-env',
            },
            {
              label: 'Flashing your Car Thing',
              slug: 'first-steps/flashing',
            },
          ],
        },
        {
          label: 'Official Apps',
          autogenerate: {
            directory: 'official-apps',
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
