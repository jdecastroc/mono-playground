const { withFederatedSidecar } = require("@module-federation/nextjs-mf");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

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
    config.optimization = { ...config.optimization, runtimeChunk: false, splitChunks: false }; // Needed for MFE to load properly from shell app
    config.output.publicPath = "auto"; // Needed for MFE to load properly from shell app
    return config;
  }
};

module.exports = withFederatedSidecar({
  name: 'obelix',
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./Nav": "./components/Nav/index.tsx"
  },
  shared: {
    react: {
      requiredVersion: false,
      singleton: true,
    }
  }
})(withNx(nextConfig))

