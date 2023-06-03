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
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].csp = {
        // CSP のディレクティブを設定する
        'default-src': "'self'",
        'script-src': ["'self'", "https://js.stripe.com", "'unsafe-inline'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': "'self' data:",
        'font-src': "'self'",
        'connect-src': "'self'",
      };
      return args;
    });
  },
  devServer: {
    headers: {
      "Content-Security-Policy": "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; script-src 'self' https://js.stripe.com 'unsafe-inline'"
    }
  }
}
