/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../web/themes/custom/drupak_starterkit/components/**/*.stories.@(js|twig)"
  ],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: [
        {
          loader: 'twig-loader',
          options: {
            // optional: you can pass Twig options here
            // for example, data you want available in templates
          },
        },
      ],
	});
	
    return config; 
  }
};

module.exports = config;