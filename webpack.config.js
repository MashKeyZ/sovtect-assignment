const webpack = require('webpack');


module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: 'public/assets/[hash]-[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  };