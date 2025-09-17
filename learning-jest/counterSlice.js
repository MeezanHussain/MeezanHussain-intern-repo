const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// Async thunk for fetching counter value from API
const fetchCounterValue = createAsyncThunk(
    'counter/fetchValue',
    async (endpoint = 'https://jsonplaceholder.typicode.com/posts/1') => {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        return data.id || 0; // Use post ID as counter value
    }
);

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        loading: false,
        error: null
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
            state.error = null;
        },
        setValue: (state, action) => {
            state.value = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCounterValue.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCounterValue.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(fetchCounterValue.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

module.exports = {
    counterSlice,
    fetchCounterValue,
    increment: counterSlice.actions.increment,
    decrement: counterSlice.actions.decrement,
    reset: counterSlice.actions.reset,
    setValue: counterSlice.actions.setValue
};
