const path = require("path");

const config = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  output: {
    filename: "worker.js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
};

module.exports = (env) => {
  config.mode = env.ENVIRONMENT === "development" ? "development" : "production";
  return config;
};
