/** @type {import('next').NextConfig} */
// For stylelint
const StylelintPlugin = require("stylelint-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  // For stylelint
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
}

module.exports = nextConfig
