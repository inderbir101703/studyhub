import React from "react";
import { render, screen } from "@testing-library/react";
import { LogoNotStyled } from './Logo';

test("Rendering Logo", () => {
  render(<LogoNotStyled src="#" alt="header-logo" type="headerLogo" />);
  const LogoName = screen.getByTestId("logo-1");
  expect(LogoName.alt).toBe("header-logo");
});
