module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-storysource'
  ]
}
