module.exports = {
  testMatch: ["*/_test_//.[jt]s?(x)", "*/?(.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageDirectory: "./coverage", // Certifique-se de que esta linha está presente
  coverageReporters: ["json"], // Adicione esta linha para gerar relatórios JSON
};
