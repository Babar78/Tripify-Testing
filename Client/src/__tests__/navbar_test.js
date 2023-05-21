import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Discover from "../components/Navbar/Discover/Discover";
import SpecialDeals from "../components/SpecialDeals/SpecialDeals";
import Aboutus from "../components/Aboutus/Aboutus";

test("renders Discover page when Discover Button is clicked", () => {
  // Define a variable to keep track of the current route
  let currentRoute = "/";

  // Define a function to update the current route
  const handleNavigate = (route) => {
    currentRoute = route;
  };

  // Render the Navbar component wrapped in a Router
  const { getByText } = render(
    <Router>
      <Navbar navigate={handleNavigate} />
    </Router>
  );

  // Click on the Discover button
  fireEvent.click(getByText("Discover"));

  // Wait for the route update to occur (e.g., using a setTimeout)
  // Adjust the timeout duration based on your application's behavior
  setTimeout(() => {
    // Check if the current route is updated to '/discover'
    expect(currentRoute).toBe("/discover");

    // Render the Discover component based on the updated route
    const { getByTestId } = render(
      <Router initialEntries={[currentRoute]} initialIndex={0}>
        <Discover />
      </Router>
    );

    // Check if the Discover component renders correctly
    expect(getByTestId("discover-page")).toBeInTheDocument();
  }, 1000); // Adjust the timeout duration based on your application's behavior
});

test("renders Special Deals page when Respective Button is clicked", () => {
  // Define a variable to keep track of the current route
  let currentRoute = "/";

  // Define a function to update the current route
  const handleNavigate = (route) => {
    currentRoute = route;
  };

  // Render the Navbar component wrapped in a Router
  const { getByText } = render(
    <Router>
      <SpecialDeals navigate={handleNavigate} />
    </Router>
  );

  // Click on the Discover button
  fireEvent.click(getByText("Special Deals"));

  // Wait for the route update to occur (e.g., using a setTimeout)
  // Adjust the timeout duration based on your application's behavior
  setTimeout(() => {
    // Check if the current route is updated to '/discover'
    expect(currentRoute).toBe("/specialDeals");

    // Render the Discover component based on the updated route
    const { getByTestId } = render(
      <Router initialEntries={[currentRoute]} initialIndex={0}>
        <SpecialDeals />
      </Router>
    );

    // Check if the Discover component renders correctly
    expect(getByTestId("special-deals-page")).toBeInTheDocument();
  }, 1000); // Adjust the timeout duration based on your application's behavior
});

test("renders About Us page when Respective Button is clicked", () => {
  // Define a variable to keep track of the current route
  let currentRoute = "/";

  // Define a function to update the current route
  const handleNavigate = (route) => {
    currentRoute = route;
  };

  // Render the Navbar component wrapped in a Router
  const { getByText } = render(
    <Router>
      <Aboutus navigate={handleNavigate} />
    </Router>
  );

  // Click on the Discover button
  fireEvent.click(getByText("About Us", { selector: "a" }));

  // Wait for the route update to occur (e.g., using a setTimeout)
  // Adjust the timeout duration based on your application's behavior
  setTimeout(() => {
    // Check if the current route is updated to '/discover'
    expect(currentRoute).toBe("/aboutus");

    // Render the Discover component based on the updated route
    const { getByTestId } = render(
      <Router initialEntries={[currentRoute]} initialIndex={0}>
        <Aboutus />
      </Router>
    );

    // Check if the Discover component renders correctly
    expect(getByTestId("about-us-page")).toBeInTheDocument();
  }, 1000); // Adjust the timeout duration based on your application's behavior
});
