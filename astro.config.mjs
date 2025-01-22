import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://carthing.wiki',
  integrations: [
    starlight({
      title: 'Thing Labs Wiki',
      logo: {
        src: './src/assets/thinglabs-logo.svg',
        replacesTitle: true,
      },
      components: {
        Head: './src/components/Head.astro',
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
          label: 'ThingLabs Apps',
          items: [
            {
              label: 'DeskThing',
              items: [
                {
                  label: 'Introduction',
                  slug: 'thinglabs-apps/deskthing/introduction',
                },
                {
                  label: 'Server Configuration',
                  slug: 'thinglabs-apps/deskthing/server-config',
                },
                {
                  label: 'Managing Apps',
                  slug: 'thinglabs-apps/deskthing/managing-apps',
                },
                {
                  label: 'FAQ',
                  slug: 'thinglabs-apps/deskthing/faq',
                },
                {
                  label: 'Official Apps',
                  autogenerate: { directory: '/ThingLabs-Apps/DeskThing/Apps' },
                },
              ]
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
