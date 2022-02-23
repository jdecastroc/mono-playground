// const { withModuleFederation } = require("@module-federation/nextjs-mf");
const withNx = require('@nrwl/next/plugins/with-nx');

const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config, options) => {
    const {
      ModuleFederationPlugin
    } = options.webpack.container;
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'service_shell',
        remotes: {
          'app2': "app2@https://kevinmfe.s3.amazonaws.com/app2/dist/remoteEntry.js",
          'asterix': "asterix@http://localhost:4200/remoteEntry.js",
          'obelix': 'obelix@http://localhost:3000/_next/static/chunks/remoteEntry.js'
        },
        exposes: {},
        shared: {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          }
        }
      })
    );
    // Attaching next internals to share scope at runtime with other nextjs mfe
    config.module.rules.push({
      test: /_app.js/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });
    return config;
  }
};

module.exports = withVanillaExtract(withNx(nextConfig))
