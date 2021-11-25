import { render, screen } from "@testing-library/react";
import Anchor, { AnchorNotStyled } from "./Anchor";

test("renders link href correctly", () => {
  render(
    <Anchor
      href="https://www.google.com/"
      text="Forgot Password"
      target="_blank"
      varient="normal"
    />
  );
  const hrefElement = screen.getByText(/Forgot Password/i);
  expect(hrefElement.href).toBe("https://www.google.com/");
});

test("renders link target correctly", () => {
  render(
    <Anchor
      href="https://www.google.com/"
      text="Sign Up"
      target="_blank"
      varient="normal"
    />
  );
  const hrefElement = screen.getByText(/Sign Up/i);
  expect(hrefElement.target).toBe("_blank");
});

test("renders link text correctly", () => {
  render(
    <Anchor
      href="https://www.google.com/"
      text="Sign in"
      target="_blank"
      varient="normal"
    />
  );
  const hrefElement = screen.getByText(/Sign in/i);
  expect(hrefElement.innerHTML).toBe("Sign in");
});
