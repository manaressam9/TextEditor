const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
    // publicPath: '/',
  },

  target: "web",
  devServer: {
    port: "4000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(mp4)$/,
        loader: "file-loader",
      },
     
      {
        test: /\.(gif|webm|svg|jpg|jpeg|png|mp4)$/,
        loader: "file-loader",
      }
    ],
  },
};