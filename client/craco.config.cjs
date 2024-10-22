// craco.config.cjs

module.exports = {
  devServer: (devServerConfig) => {
    return {
      ...devServerConfig,
      allowedHosts: ['localhost'], // Or 'all' to allow all hosts
    };
  },
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
   