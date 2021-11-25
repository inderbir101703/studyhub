import React from 'react';
import { render, screen } from '@testing-library/react';

import Icon from './Icon';

  

test('renders size correctly', () => {
    render(<Icon type="home" size="lg" style={{"color":"red"}}/>);
    const linkElement = screen.getByTestId('icon');
    //console.log(linkElement,linkElement.getAttribute('iconSize'));
    expect(linkElement.getAttribute('iconSize')).toBe("lg");
});

test('renders color correctly', () => {
    render(<Icon type="home" size="lg" color="red"/>);
    const linkElement = screen.getByTestId('icon');
    //console.log(linkElement,linkElement.getAttribute('iconSize'));
    expect(linkElement.getAttribute('color')).toBe("red");
});
