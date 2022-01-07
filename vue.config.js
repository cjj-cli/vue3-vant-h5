/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const tsImportPluginFactory = require('ts-import-plugin');

const isMock = process.env.NODE_ENV === 'mock';

module.exports = {
  devServer: {
    port: isMock ? 3100 : 3102,
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
