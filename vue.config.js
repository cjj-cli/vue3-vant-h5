/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const tsImportPluginFactory = require('ts-import-plugin');

const isMock = process.env.NODE_ENV === 'mock';
const port = isMock ? process.env.VUE_APP_MOCK_PORT : process.env.VUE_APP_PORT;
const target = isMock
  ? process.env.VUE_APP_PROXY_MOCK_URL
  : process.env.VUE_APP_PROXY_URL;

module.exports = {
  devServer: {
    port: Number(port),
    proxy: {
      '^/api': {
        target,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  chainWebpack: (config) => {
    // 按需引入vant
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap((options) => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true,
              }),
            ],
          }),
          compilerOptions: {
            module: 'es2015',
          },
        });
        return options;
      });
  },
};
