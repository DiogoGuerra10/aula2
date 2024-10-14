/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageReporters: ["json"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};

module.exports = config;
