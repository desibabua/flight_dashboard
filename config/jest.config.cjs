module.exports = {
  rootDir: "../",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^.+.(png|jpg|webp|ttf|woff|woff2|svg|mp4)$": "jest-transform-stub",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/config/setupTests.js"],
};
