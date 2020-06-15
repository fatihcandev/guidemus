module.exports = {
  test: /\.(jpe?g|png)$/i,
  loaders: [
    {
      loader: 'lqip-loader',
      options: {
        base64: true,
        palette: false
      }
    }
  ]
}
