import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
        github: 'https://github.com/Car-Thing-Hax-Community',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Example Guide',
              slug: 'guides/example',
            },
          ],
        },
        {
          label: 'Reference',
          autogenerate: {
            directory: 'reference',
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
