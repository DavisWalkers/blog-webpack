const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          'style-loader', 
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@common': path.resolve('src', 'common'),
      '@pages': path.resolve('src', 'pages'),
      '@redux': path.resolve('src', 'redux'),
      '@styles': path.resolve('src', 'styles'),
      '@assets': path.resolve('src', 'assets'),
    },
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: './',
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
  }
}