module.exports = {
  transpileDependencies: true,
  plugins: {
    autoperfixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      SelectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    }
  }

}
