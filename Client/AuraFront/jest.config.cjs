const { transform } = require("@babel/core");
const { testEnvironment } = require("jest-environment-jsdom");

module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
        '\\.css$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
};