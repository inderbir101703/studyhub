import React from 'react'
import { render, screen } from '@testing-library/react';
import { CheckBoxNotStyled } from './CheckBox.js'
import "@testing-library/jest-dom/extend-expect";
// import userEvent from '@testing-library/user-event'

describe("Checkbox Input", () => {

  test('render component', () => {
    render(<CheckBoxNotStyled />);

    const cbEl = screen.getByTestId("input-checkbox");
    expect(cbEl).toBeInTheDocument();
  });

  it('should be unchecked initially', () => {
    render(<CheckBoxNotStyled />)

    const cbEl = screen.getByTestId("input-checkbox");
    expect(cbEl).not.toBeChecked();
    // userEvent.click(screen.getByTestId('label'))
    // expect(screen.getByTestId('input-checkbox')).toBeChecked()
    // userEvent.click(screen.getByTestId('label'))
    // expect(screen.getByTestId('input-checkbox')).not.toBeChecked()
  })

});