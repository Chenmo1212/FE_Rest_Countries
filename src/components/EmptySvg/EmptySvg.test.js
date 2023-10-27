import React from 'react';
import {render, screen} from '@testing-library/react';
import EmptySvg from './EmptySvg';

describe('EmptySvg Component', () => {
    it('should render with default message', () => {
        render(<EmptySvg/>);
        const defaultMessage = screen.getByText('Nothing found');
        expect(defaultMessage).toBeInTheDocument();
    });

    it('should render with a custom message', () => {
        const customMessage = 'Custom Message';
        render(<EmptySvg message={customMessage}/>);
        const customMessageElement = screen.getByText(customMessage);
        expect(customMessageElement).toBeInTheDocument();
    });
});
