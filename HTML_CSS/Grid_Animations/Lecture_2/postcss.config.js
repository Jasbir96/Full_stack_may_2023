module.exports = {
    plugins: [
        require("autoprefixer"),
        require("postcss-preset-env")({
            stage: 1
        }),
        require("cssnano"),
        require("precss")
    ]
}