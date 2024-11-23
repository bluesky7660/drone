const { overrideDevServer } = require('customize-cra');
const path = require('path');
const devServerConfig = () => (config) => {
  config.port = 8083; // 원하는 포트 번호
  return config;
};
module.exports = {
  webpack: function override(config) {
    // Webpack이 src 폴더를 기준으로 경로를 인식하도록 설정
    config.resolve.modules = [path.resolve(__dirname, 'src'), 'node_modules'];
    process.env.PORT = 3001;
    // 경로 별칭을 Webpack에 명시적으로 추가
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@etc': path.resolve(__dirname, 'src/etc'),
      '@firebaseApi': path.resolve(__dirname, 'src/firebase'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/core/hooks'),
      '@router': path.resolve(__dirname, 'src/feature-module/router')
    };

    return config;
  },
  devServer: overrideDevServer(devServerConfig()),
};
