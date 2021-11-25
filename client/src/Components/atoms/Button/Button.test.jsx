import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonStyle } from "./Button";

test("should return buttonText when rendered", () => {
  render(
    <ButtonStyle
      onClick={() => console.log("You clicked on the reply button")}
      btnText="Reply"
      varient="secondary"
    />
  );
  const btnClassName = screen.getByRole("button");
  expect(btnClassName.innerHTML).toBe("Reply");
});

test("Button calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(
    <ButtonStyle 
      onClick={handleClick}
      btnText="Like"
      varient="primary"
    ></ButtonStyle>
  );
  fireEvent.click(screen.getByText(/Like/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
