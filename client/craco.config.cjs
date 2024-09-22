// craco.config.cjs

module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        // Add ts-loader
        webpackConfig.module.rules.push({
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        });
        return webpackConfig;
      },
    },
  };
   