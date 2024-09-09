// craco.config.cjs

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Find the existing source-map-loader rule and modify it
      webpackConfig.module.rules.forEach((rule) => {
        if (
          rule.enforce === "pre" &&
          rule.use &&
          rule.use.some((use) => use.loader.includes("source-map-loader"))
        ) {
          rule.exclude = [
            ...(rule.exclude || []), // Preserve existing excludes
            /@fluentui\/react-window-provider/, // Add Fluent UI package to excludes
          ];
        }
      });

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
