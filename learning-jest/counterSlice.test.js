const { counterSlice, fetchCounterValue, increment, decrement, reset, setValue } = require('./counterSlice');

describe('counterSlice', () => {
    const initialState = {
        value: 0,
        loading: false,
        error: null
    };

    describe('reducers', () => {
        test('should handle initial state', () => {
            expect(counterSlice.reducer(undefined, { type: 'unknown' })).toEqual(initialState);
        });

        test('should handle increment', () => {
            const actual = counterSlice.reducer(initialState, increment());
            expect(actual.value).toBe(1);
        });

        test('should handle decrement', () => {
            const state = { ...initialState, value: 5 };
            const actual = counterSlice.reducer(state, decrement());
            expect(actual.value).toBe(4);
        });

        test('should handle reset', () => {
            const state = { ...initialState, value: 10, error: 'Some error' };
            const actual = counterSlice.reducer(state, reset());
            expect(actual.value).toBe(0);
            expect(actual.error).toBe(null);
        });

        test('should handle setValue', () => {
            const actual = counterSlice.reducer(initialState, setValue(42));
            expect(actual.value).toBe(42);
        });
    });

    describe('async thunk', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
            delete globalThis.fetch;
        });

        test('should handle fetchCounterValue.pending', () => {
            const action = { type: fetchCounterValue.pending.type };
            const state = counterSlice.reducer(initialState, action);
            expect(state.loading).toBe(true);
            expect(state.error).toBe(null);
        });

        test('should handle fetchCounterValue.fulfilled', () => {
            const action = { 
                type: fetchCounterValue.fulfilled.type, 
                payload: 123 
            };
            const state = counterSlice.reducer(initialState, action);
            expect(state.loading).toBe(false);
            expect(state.value).toBe(123);
        });

        test('should handle fetchCounterValue.rejected', () => {
            const action = { 
                type: fetchCounterValue.rejected.type, 
                error: { message: 'Network error' } 
            };
            const state = counterSlice.reducer(initialState, action);
            expect(state.loading).toBe(false);
            expect(state.error).toBe('Network error');
        });

        test('should dispatch async thunk successfully', async () => {
            globalThis.fetch = jest.fn().mockResolvedValueOnce({
                ok: true,
                json: async () => ({ id: 99 })
            });

            const dispatch = jest.fn();
            const getState = jest.fn();

            await fetchCounterValue()(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith(
                expect.objectContaining({ type: fetchCounterValue.pending.type })
            );
            expect(dispatch).toHaveBeenCalledWith(
                expect.objectContaining({ 
                    type: fetchCounterValue.fulfilled.type,
                    payload: 99 
                })
            );
        });

        test('should handle async thunk rejection', async () => {
            globalThis.fetch = jest.fn().mockResolvedValueOnce({
                ok: false
            });

            const dispatch = jest.fn();
            const getState = jest.fn();

            await fetchCounterValue()(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith(
                expect.objectContaining({ type: fetchCounterValue.pending.type })
            );
            expect(dispatch).toHaveBeenCalledWith(
                expect.objectContaining({ 
                    type: fetchCounterValue.rejected.type,
                    error: expect.objectContaining({ message: 'Failed to fetch' })
                })
            );
        });
    });
});
