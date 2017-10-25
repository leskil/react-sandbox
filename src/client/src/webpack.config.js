var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Path = require("path");

module.exports = {
    entry: "./index.tsx",
    output: {
        filename: "bundle.js",
        path: Path.resolve(__dirname, "../assets")
    },
    devtool: "source-map",
    watch: true,
    devServer: {
        contentBase: "./.."
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less", ".css"],
        modules: [
            Path.join(__dirname, 'node_modules')
            //"./node_modules/**"
            //Path.resolve("./node_modules")
        ]
        //modulesDirectories: ["./node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "less-loader"],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};