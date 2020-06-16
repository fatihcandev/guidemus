module.exports = {
  test: /\.jpe?g$/,
  loaders: [
    {
      loader: 'lqip-loader',
      options: {
        path: '/', // your image going to be in media folder in the output dir
        name: '[name].[ext]', // you can use [hash].[ext] too if you wish,
        base64: true // default: true, gives the base64 encoded image
      }
    }
  ]
}
