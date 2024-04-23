// const { transform } = require("@babel/core");
// const { testEnvironment } = require("jest-environment-jsdom");

module.exports = {
    testEnvironment: 'jsdom',
 moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
 },
 setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],  
};

 // transform: {
    //     '^.+\\.jsx?$': 'babel-jest',
    // },
    // moduleNameMapper: {
    //     '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
    //     '\\.css$': 'identity-obj-proxy',
    // },
    // testEnvironment: 'jsdom',