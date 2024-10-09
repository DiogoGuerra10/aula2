/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)", // Corrigido
    "**/?(*.)+(spec|test).[tj]s?(x)", // Corrigido
  ],
  collectCoverage: true,
  testPathIgnorePatterns: ["<rootDir>/node_modules/"], // Usar <rootDir> para melhor compatibilidade
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
};

module.exports = config;
