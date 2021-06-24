// postcss.config.js
module.exports = {
    plugins: [
        require("postcss-nesting"),
        require("tailwindcss"),
        require("autoprefixer"),
        require('postcss-nested'),
    ],
};
