import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorHandle from './ErrorHandle';

test('ErrorHandle renders with the provided message', () => {
    const errorMessage = 'This is an error message';
    render(<ErrorHandle message={errorMessage} />);

    // Use screen.getByText to find the message element by its text
    const messageElement = screen.getByText(errorMessage);

    // Ensure the message element is present in the rendered component
    expect(messageElement).toBeInTheDocument();

    // Ensure the title attribute is set correctly
    expect(messageElement).toHaveAttribute('title', errorMessage);
});
