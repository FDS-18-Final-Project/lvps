const cracoAliasPlugin = require('craco-alias');

module.exports = {
  webpack: {
    configure: {
      // webpack 구성 옵션
      // 참고: https://webpack.js.org/configuration
      module: {
        rules: [
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false
                  },
                  // the webp option will enable WEBP
                  webp: {
                    quality: 75
                  }
                }
              }
            ]
          }
        ]
      }
    }
  },
  plugins: [
    {
      plugin: cracoAliasPlugin,
      options: {
        source: 'jsconfig',
        baseUrl: './src',
        aliases: {
          // '@components/*': ['components/*', 'components'],
        }
        // debug: false,
      }
    }
  ]
};
