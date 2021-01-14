module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/redsoft/'
  : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "@/assets/scss/main.scss";'
      }
    }
  }
};
