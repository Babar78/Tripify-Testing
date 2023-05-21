import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home/Home";
import "@testing-library/jest-dom/extend-expect";

describe("Home", () => {
  test("renders the main title", () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const mainTitle = screen.getByRole("heading", {
      name: /EXPLORE THE WORLD WITH A SMILE/i,
    });
    expect(mainTitle).toBeInTheDocument();
  });

  test("renders the 'Where to next?' subheading", () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const subheading = screen.getByRole("heading", {
      name: /Where to next?/i,
    });
    expect(subheading).toBeInTheDocument();
  });

  // Add more test cases for other headings
});
