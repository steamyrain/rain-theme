const path = require('path');

module.exports = [
    {        
        entry: "./src/main.scss",
        output: {
            path: path.resolve(__dirname,"static/js"),
            // This is necessary for webpack to compile, but we won't reference it.
            filename: "style-bundle-main.js",
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'bundle-main.css',
                                outputPath: '../css',
                            },
                        },
                        {
                            loader: 'extract-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,    
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                    sassOptions: {
                                        includePaths: ['./node_modules'],
                                    }
                            },
                        },
                    ],
                },
            ],
        },
    },
    {        
        entry: "./src/main.js",
        output: {
            path: path.resolve(__dirname,"static/js"),
            filename: "bundle-main.js",
        },
        module: {
            rules: [
                {
                    test: /\.pdf$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: '../docs',
                            },
                        },
                    ],
                },
            ],
        },
    },
];
