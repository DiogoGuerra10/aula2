import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/home.js";
test("verifica se o componente Home é renderizado com o texto correto", () => {
  // Renderiza o componente Home
  render(<Home />);
  // Procura pelo texto 'Welcome to Home Page' no documento
  const headingElement = screen.getByText(/Welcome to Home Page/i);
  // Verifica se o elemento está no DOM
  expect(headingElement).toBeInTheDocument();
});
