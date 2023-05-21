import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "@testing-library/jest-dom/extend-expect";

describe("Footer", () => {
  test("renders the footer and checks links", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();

    // Check the links in the footer
    const destinationLink = screen.getByRole("link", {
      name: /Feary Meadows/i,
    });
    expect(destinationLink).toHaveAttribute(
      "href",
      "/destination/Feary Meadows/Pakistan"
    );

    const aboutUsLink = screen.getByRole("link", {
      name: /About Tripify/i,
    });
    expect(aboutUsLink).toHaveAttribute("href", "/Aboutus");

    // Add more checks for other links in the footer
  });
});
