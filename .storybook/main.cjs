module.exports = {
  // use glob matching, eg: ../src/stories/**/*.stories.@(ts|tsx|js|jsx|mdx)
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  logLevel: "debug",
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-links",
    "@storybook/addon-highlight",
  ],
  core: {
    channelOptions: { allowFunction: false, maxDepth: 10 },
    disableTelemetry: true,
  },
  features: {
    buildStoriesJson: true,
    breakingChangesV7: true,
  },
  framework: "@pixi/storybook-vite",
};
