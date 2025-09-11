const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const Hello = require('./Hello.jsx');

describe('Hello component', () => {
    test('renders heading', () => {
        render(React.createElement(Hello));
        expect(screen.getByRole('heading', { name: /hello, testing library!/i })).toBeInTheDocument();
    });

    test('increments count on button click', () => {
        render(React.createElement(Hello, { initialCount: 0 }));
        const button = screen.getByRole('button', { name: /increment/i });
        fireEvent.click(button);
        expect(button).toHaveTextContent(/clicked 1 times/i);
    });
});
