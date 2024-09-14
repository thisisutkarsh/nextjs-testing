// next.config.mjs
export default {
    webpack: (config, { isServer }) => {
    //   config.ignoreWarnings = [/^(?!CriticalDependenciesWarning$)/];
      
      // You can customize further Webpack options here if needed
      
      return config;
    },
  };
  