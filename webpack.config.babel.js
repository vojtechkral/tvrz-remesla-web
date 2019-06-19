import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import sass from 'sass';
import SentryPlugin from '@sentry/webpack-plugin';
import GitRevisionPlugin from 'git-revision-webpack-plugin';

const array = (...target) => target.filter(Boolean);

const gitRevisionPlugin = new GitRevisionPlugin();

export default ((config) => ({devserver}, {mode}) => config(devserver, mode === 'development'))(
    (devServer, dev) => ({
        entry: [
            '@babel/polyfill',
            './src',
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: devServer ? '[name].js' : '[name].[contenthash].js',
        },
        optimization: {
            splitChunks: false,
            minimizer: [new UglifyJsPlugin({
                exclude: /node_modules/,
                cache: true,
                parallel: true,
                uglifyOptions: {
                    mangle: true,
                    compress: true,
                    output: {
                        comments: false,
                    },
                },
                sourceMap: true,
            })],
        },
        devtool: dev ? 'cheap-module-source-map' : 'source-map',
        resolve: {
            modules: ['src', 'node_modules'],
        },
        devServer: {
            hot: true,
            inline: true,
        },
        plugins: array(
            gitRevisionPlugin,
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                inject: true,
            }),
            devServer && new webpack.HotModuleReplacementPlugin(),
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true,
            }),
            !devServer && new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            }),
            !dev && new SentryPlugin({
                release: gitRevisionPlugin.commithash(),
                include: path.resolve(__dirname, 'dist'),
            }),
            new webpack.DefinePlugin({
                __SENTRY_RELEASE: JSON.stringify(gitRevisionPlugin.commithash()),
                __DEVELOPMENT: dev,
                __PRODUCTION: !dev,
            }),
        ),
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
                include: /src|superagent/,
            }, {
                test: /\.(css|scss)$/,
                exclude: /node_modules|src\/style/,
                use: [
                    devServer ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: sass,
                        },
                    },
                ],
            }, {
                test: /\.(css|scss)$/,
                include: /node_modules|src\/style/,
                use: [
                    devServer ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: sass,
                        },
                    },
                ],
            }, {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: devServer ? '[name].[ext]' : '[name].[hash].[ext]',
                },
            }],
        },
    }),
);
