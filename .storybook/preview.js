/** @type { import('@storybook/server').Preview } */
const preview = {
parameters: {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  server: {
    // Replace this with your Drupal site URL, or an environment variable.
    url: 'https://my-lando-app.lndo.site/',
  },
},
globals: {
  drupalTheme: 'drupak_starterkit',
  supportedDrupalThemes: {
    drupak_starterkit: {title: 'Drupak StarterKit'},
    bartik: {title: 'Bartik'},
    claro: {title: 'Claro'},
    seven: {title: 'Seven'},
  },
},
};
export default preview;