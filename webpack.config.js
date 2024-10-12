const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    mode: 'development',
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: './dist',
    },
    module:{
        rules:[ 
            {
                test: /\.js$/,
                use:{ loader: 'babel-loader'},
                exclude: /node_modules/,
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    
}