const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/react': path.resolve(
            path.join(__dirname, '../node_modules/@emotion/react'),
          ),
          '@emotion/styled': path.resolve(
            path.join(__dirname, '../node_modules/@emotion/styled'),
          ),
          '@emotion/core': path.resolve(
            path.join(__dirname, '../node_modules/@emotion/react'),
          ),
          'emotion-theming': path.resolve(
            path.join(__dirname, '../node_modules/@emotion/react'),
          ),
        },
      },
    };
  },
};
