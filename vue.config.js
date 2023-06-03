const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  
});
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => /^ion-/.test(tag)
        }
        return options
      })
  },
  devServer: {
    headers: {
      "Content-Security-Policy": "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; script-src 'self' https://js.stripe.com https://checkout.stripe.com 'unsafe-eval'; frame-src 'self' https://js.stripe.com/; connect-src 'self';"
    }
  }
}

