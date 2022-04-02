const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'innercontainer01',
      filename: 'remoteEntry.js',
      exposes: {
        './InnerContainer01': './src/index',
      },
    }),
  ],
};
