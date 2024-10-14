import React from "react";
import sum from "../pages/sum.js";

test("valida se a soma de 2 + 2 é igual a 4", () => {
  const a = 2;
  const b = 2;
  expect(sum(a, b)).toBe(4);
});
