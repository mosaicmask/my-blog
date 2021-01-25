/*
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-25 17:30:25
 */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/styles/variable.scss';
        @import '@/styles/mixins.scss';
        `,
      },
    },
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.100.186.132/your-path/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}