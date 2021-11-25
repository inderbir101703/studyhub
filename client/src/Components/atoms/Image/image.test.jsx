import React from 'react';
import { render, screen } from '@testing-library/react';
import { ImageNotStyled } from './image';

test('Rendering Image', () => {
    render(<ImageNotStyled 
                src='#' alt="profile picture" type="ProfilePicture"
          />);
          const btnClassName = screen.getByTestId("image1");
          expect(btnClassName.alt).toBe('profile picture');
});
