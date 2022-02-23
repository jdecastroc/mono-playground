const {
  ModuleFederationPlugin
} = require("webpack").container;
const deps = require("../../../package.json").dependencies;

module.exports = (config, context) => {
  return {
    ...config,
    output: {
      ...config.output,
      publicPath: "auto" // Needed for MFE to load properly from shell app
    },
    optimization: {
      ...config.optimization,
      runtimeChunk: false, // Needed for MFE to load properly from shell app
      splitChunks: false // Needed for MFE to load properly from shell app
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
      ],
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: "asterix",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "apps/tools/service-asterix/src/app/App",
        },
        shared: [{
          ...deps,
          react: {
            // eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            // eager: true,
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        }, ],
      }),
    ]
  };
};
