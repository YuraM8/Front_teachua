module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(antd|@babel)/)', // Ігнорування node_modules, окрім antd та babel
  ],
};
