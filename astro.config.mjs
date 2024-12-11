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
            {
              label: 'Flashing The Car Thing',
              slug: 'first-steps/flashing',
            },
          ],
        },
        {
          label: 'DeskThing',
          items: [
            {
              label: 'Introduction',
              slug: 'deskthing/introduction',
            },
            {
              label: 'DeskThing Server',
              slug: 'deskthing/deskthing-server',
            },
            {
              label: 'Managing Apps',
              slug: 'deskthing/managing-apps',
            },
            {
              label: 'Official Apps',
              autogenerate: { directory: 'DeskThing/Apps' },
            },
          ],
        },
        {
          label: 'Legacy Documentation',
          items: [
            {
              label: 'Setting Up',
              slug: 'legacy/setup-env',
            },
            {
              label: 'Flashing',
              slug: 'legacy/alternative-flashing',
            },
            {
              label: 'ADB Tools',
              slug: 'legacy/adb',
            },
          ],
        },
        {
          label: 'Troubleshooting',
          items: [
            {
              label: 'FAQ',
              slug: 'troubleshooting/faq',
            },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
