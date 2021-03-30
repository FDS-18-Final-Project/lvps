module.exports = {
  // Webpack 구성 파일 덮어쓰기 설정
  overrideWebpackConfig: ({
    webpackConfig,
    // cracoConfig,
    // pluginOptions,
    // context: { env, paths },
  }) => {
    // 탐색 함수
    function traverse(obj, callback) {
      if (Array.isArray(obj)) {
        obj.forEach((item) => traverse(item, callback))
      } else if (typeof obj === 'object' && obj !== null) {
        Object.keys(obj).forEach((key) => {
          if (obj.hasOwnProperty(key)) {
            callback(obj, key)
            traverse(obj[key], callback)
          }
        })
      }
    }

    // Webpack 구성 파일 탐색
    traverse(webpackConfig, (node, key) => {
      // key 값이 loader 이고
      if (key === 'loader') {
        // node[key] 값이 sass-loader, postcss-loader, css-loader인 경우
        if (
          node[key].indexOf('sass-loader') !== -1 ||
          node[key].indexOf('postcss-loader') !== -1 ||
          node[key].indexOf('css-loader') !== -1
        ) {
          // node의 options 값이 존재하면
          if (node.options) {
            // node.options 소스맵 활성화
            node.options.sourceMap = true
          }
        }
      }
    })

    // Webpack 구성 파일 내보내기
    return webpackConfig
  },
}
