import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("should render greeting message", () => {
    render(<Home />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("should not display the goodbye message", () => {
    render(<Home />);
    expect(screen.queryByText("Goodbye")).not.toBeInTheDocument();
  });

  it("should display the greeting", () => {
    render(<Home />);
    expect(screen.getByTestId("greeting-container")).toBeInTheDocument();
  });
});
