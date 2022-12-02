const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true
    },
    entry: "./src/index.jsx",
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "./dist"),
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-react"],
            }
        }, 
        { 
            test: /\.tsx$/, 
            exclude: /node_modules/,
            use: 'ts-loader', 
        },
        {
            test: /\.css$/i, 
			use: ["style-loader", "css-loader"], 
        }]
    },
    resolve: { 
        modules: ['node_modules'],
        extensions: [".tsx", ".jsx", '.js'], 
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <title>Webpack App</title>
                </head>
                <body>
                    <div id="app" />
                </body>
                </html>
            `,
        }),
    ],
};