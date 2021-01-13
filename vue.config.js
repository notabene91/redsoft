module.exports = {
  publicPath: "/redsoft/",
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "@/assets/scss/main.scss";'
      }
    }
  }
};
