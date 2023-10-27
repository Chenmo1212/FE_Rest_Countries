import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryCard from './CountryCard';

// Define a sample country object for testing
const sampleCountry = {
    name: { official: 'TestCountry' },
    flag: 'test-flag.png',
    flags: { png: 'test-flag.png' },
    population: 1000000,
    region: 'TestRegion',
    capital: 'TestCapital',
};

test('CountryCard renders with the provided country data', () => {
    render(<CountryCard country={sampleCountry} />);

    // Use screen.getByText to find the various text elements within the component
    const nameElement = screen.getByText('TestCountry');
    const populationElement = screen.getByText('1,000,000');
    const regionElement = screen.getByText('TestRegion');
    const capitalElement = screen.getByText('TestCapital');

    // Ensure all the elements are present in the rendered component
    expect(nameElement).toBeInTheDocument();
    expect(populationElement).toBeInTheDocument();
    expect(regionElement).toBeInTheDocument();
    expect(capitalElement).toBeInTheDocument();

    // Ensure the flag background image is set correctly
    const flagElement = screen.getByTestId('country-flag');
    expect(flagElement).toHaveStyle({ backgroundImage: 'url(test-flag.png)' });
});
