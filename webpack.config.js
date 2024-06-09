const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: [
      path.resolve(__dirname, "./src/index.js"),
      path.resolve(__dirname, "./src/templates/countries_tpl.hbs"),
    ],
    date: path.resolve(__dirname, "./src/pages/date/date.js"),
    promise: path.resolve(__dirname, "./src/pages/promise/promise.js"),
    news: path.resolve(__dirname, "./src/pages/news/news.js"),
    pagination: path.resolve(__dirname, "./src/pages/pagination/pagination.js")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.hbs$/i,
        loader: "handlebars-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.(ico|png|jpeg|webp|svg)$/,
        type: "asset/resource",

        generator: {
          filename: "img/[name].[hash:8][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "New Page",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Date",
      filename: "date.html",
      template: "./src/pages/date/date.html",
      chunks: ["date"],
    }),
    new HtmlWebpackPlugin({
      title: "Promise",
      filename: "promise.html",
      template: "./src/pages/promise/promise.html",
      chunks: ["promise"],
    }),
    new HtmlWebpackPlugin({
      title: "News",
      filename: "news.html",
      template: "./src/pages/news/news.html",
      chunks: ["news"],
    }),
    new HtmlWebpackPlugin({
      title: "Pagination",
      filename: "pagination.html",
      template: "./src/pages/pagination/pagination.html",
      chunks: ["pagination"],
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CleanWebpackPlugin(),
  ],
  performance: {
    hints: false, // Вимкнення попереджень про розмір файлів
    maxAssetSize: 512000, // Максимальний розмір активу в байтах (500 КБ)
    maxEntrypointSize: 512000, // Максимальний розмір точки входу в байтах (500 КБ)
  },
  devServer: {
    port: 4444,
    open: true,
  },
};
