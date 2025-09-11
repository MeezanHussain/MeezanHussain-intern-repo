const React = require('react');

function FetchUser({ endpoint = 'https://example.com/api/user' }) {
    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const load = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch(endpoint);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            setUser(data);
        } catch (e) {
            setError(e.message || 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    return React.createElement(
        'div',
        { 'data-testid': 'fetch-user' },
        React.createElement('h2', null, 'User Loader'),
        React.createElement('button', { onClick: load }, 'Load User'),
        loading && React.createElement('div', { role: 'status' }, 'Loading...'),
        error && React.createElement('div', { role: 'alert' }, error),
        user && React.createElement('pre', { 'data-testid': 'user-json' }, JSON.stringify(user, null, 2))
    );
}

module.exports = FetchUser;
