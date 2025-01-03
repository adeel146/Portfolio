const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Ensure Webpack 4 compatibility
    if (Array.isArray(config)) {
      config.forEach(cfg => {
        if (cfg.resolve && cfg.resolve.fallback) {
          delete cfg.resolve.fallback; // Remove the fallback property
        }
      });
    } else {
      if (config.resolve && config.resolve.fallback) {
        delete config.resolve.fallback; // Remove the fallback property
      }
    }

    // Additional custom Webpack configuration
    config.resolve.alias['@'] = path.join(__dirname, 'src');

    return config;
  },
};