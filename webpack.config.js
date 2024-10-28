import { resolve } from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';

export const entry = './src/index.js';
export const output = {
  path: resolve(__dirname, 'dist'),
  filename: 'app.bundle.js',
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
        },
      ],
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
};
export const plugins = [
  new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }),
];