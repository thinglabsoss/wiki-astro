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
              label: 'Flashing Your Car Thing',
              slug: 'first-steps/flashing',
            },
            {
              label: 'Choose a Car Thing Application',
              slug: 'first-steps/applications',
            },
          ],
        },
        {
          label: 'Official Apps',
          items: [
            {
              label: 'DeskThing',
              items: [
                {
                  label: 'Introduction',
                  slug: 'official-apps/deskthing/introduction',
                },
                {
                  label: 'DeskThing Server',
                  slug: 'official-apps/deskthing/deskthing-server',
                },
                {
                  label: 'Managing Apps',
                  slug: 'official-apps/deskthing/managing-apps',
                },
                {
                  label: 'Apps',
                  autogenerate: { directory: 'official-apps/DeskThing/Apps' },
                },
                {
                  label: 'FAQ',
                  autogenerate: { directory: 'official-apps/DeskThing/FAQ' },
                },
              ]
            },
          ],
        },
        {
          label: 'Community Apps',
          items: [
            {
              label: 'GlanceThing',
              autogenerate: { directory: 'community-apps/GlanceThing' },
            },
            {
              label: 'Nocturne',
              autogenerate: { directory: 'community-apps/Nocturne' },
            },
          ],
        },
        {
          label: 'App Development',
          items: [
            {
              label: 'Introduction',
              autogenerate: { directory: 'app-development' },
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
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
