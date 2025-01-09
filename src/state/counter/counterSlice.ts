import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        // Add additional reducers
        .addCase(incrementAsync.pending,() => {
            console.log("incrementAsync.pending")
        })
        .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }) 

        // .addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
        //     state.value -= action.payload; //
        // })
    }
});

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    // async (amount: number, thunkAPI) => {
    //     await new Promise((resolve) => setTimeout(resolve, 1000));
    //     thunkAPI.dispatch(incrementByAmount(amount));
    // }  
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }  
)

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
