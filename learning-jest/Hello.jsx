const React = require('react');

function Hello({ initialCount = 0 }) {
    const [count, setCount] = React.useState(initialCount);

    return React.createElement(
        'div',
        { 'data-testid': 'hello' },
        React.createElement('h1', null, 'Hello, Testing Library!'),
        React.createElement(
            'button',
            {
                onClick: () => setCount(count + 1),
                'aria-label': 'increment'
            },
            `Clicked ${count} times`
        )
    );
}

module.exports = Hello;
