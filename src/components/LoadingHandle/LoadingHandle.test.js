import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingIndicator from './LoadingHandle';

test('LoadingIndicator component renders correctly', () => {
    render(<LoadingIndicator />);

    // Ensure that the loading circles and text are present
    const loadingCircles = screen.getAllByTestId('loading-circle');
    const loadingText = screen.getByText('Loading...');

    expect(loadingCircles.length).toBe(3); // You may adjust this number based on your actual component.
    expect(loadingText).toBeInTheDocument();
});
