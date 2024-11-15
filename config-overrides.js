const path = require('path');

module.exports = function override(config) {
  // Webpack이 src 폴더를 기준으로 경로를 인식하도록 설정
  config.resolve.modules = [path.resolve(__dirname, 'src'), 'node_modules'];

  // 경로 별칭을 Webpack에 명시적으로 추가
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src'),
    '@context': path.resolve(__dirname, 'src/context'),
    '@router': path.resolve(__dirname, 'src/feature-module/router')
  };

  return config;
};
