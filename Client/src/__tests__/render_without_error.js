import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home/Home";
import Aboutus from "../components/Aboutus/Aboutus";
import Contactus from "../components/Contactus/Contactus";
import Subscribe from "../components/Subscribe/Subscribe";
import SpecialDeals from "../components/SpecialDeals/SpecialDeals";
import Footer from "../components/Footer/Footer";
import SuggAndAppForm from "../components/SuggAndAppForm/SuggAndAppForm";

describe("Components Render", () => {
  test("Home component renders without error", () => {
    expect(() => {
      render(
        <Router>
          <Home />
        </Router>
      );
    }).not.toThrow();
  });

  test("Aboutus component renders without error", () => {
    expect(() => {
      render(
        <Router>
          <Aboutus />
        </Router>
      );
    }).not.toThrow();
  });

  test("Contactus component renders without error", () => {
    expect(() => {
      render(
        <Router>
          <Contactus />
        </Router>
      );
    }).not.toThrow();
  });

  test("Subscribe component renders without error", () => {
    expect(() => {
      render(
        <Router>
          <Subscribe />
        </Router>
      );
    }).not.toThrow();
  });

  test("SpecialDeals component renders without error", () => {
    expect(() => {
      render(
        <Router>
          <SpecialDeals />
        </Router>
      );
    }).not.toThrow();
  });

  test("Footer component renders without error", () => {
    expect(() => {
      render(
        <Router>
          <Footer />
        </Router>
      );
    }).not.toThrow();
  });

  test("SuggAndAppForm component renders without error", () => {
    expect(() => {
      render(
        <Router>
          <SuggAndAppForm />
        </Router>
      );
    }).not.toThrow();
  });
});
