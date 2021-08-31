const path = require('path')
const withOffline = require("next-offline");
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const debug = process.env.NODE_ENV !== "production";

const plugin = withPlugins([
  [optimizedImages,],
]);

const nextConfig = {};

module.exports = {
  withOffline: nextConfig,
  reactStrictMode: true,
  withPWA: {
    pwa: {
      dest: 'public'
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "_mixins.scss"; @import "_variables.scss";`
  },
  images: {
    domains: [
      "picsum.photos",
    ],
  },
  plugin,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/tentang-kami": { page: "/tentang-kami" },
      "/blog": { page: "/blog" },
      "/river-guide": { page: "/river-guide" },
      "/administrator": { page: "/administrator" },
    }
  },
  basePath: !debug ? '/hmpl-river-guide' : '',
  assetPrefix: !debug ? '/hmpl-river-guide/' : '',
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  }
}
