const React = require('react');
const { render, screen, fireEvent, waitFor } = require('@testing-library/react');
const FetchUser = require('./FetchUser.jsx');

beforeEach(() => {
    jest.restoreAllMocks();
    delete globalThis.fetch;
});

describe('FetchUser', () => {
    test('fetches and displays user data', async () => {
        const mockUser = { id: 1, name: 'Focus Bear' };
        globalThis.fetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            json: async () => mockUser
        });

        render(React.createElement(FetchUser, { endpoint: '/api/user' }));

        fireEvent.click(screen.getByRole('button', { name: /load user/i }));

        await waitFor(() => expect(screen.queryByRole('status')).not.toBeInTheDocument());
        expect(screen.getByTestId('user-json')).toHaveTextContent('Focus Bear');
        expect(globalThis.fetch).toHaveBeenCalledWith('/api/user');
    });

    test('handles error state', async () => {
        globalThis.fetch = jest.fn().mockResolvedValueOnce({ ok: false, status: 500 });

        render(React.createElement(FetchUser, { endpoint: '/api/user' }));

        fireEvent.click(screen.getByRole('button', { name: /load user/i }));

        await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/http 500/i));
    });
});
