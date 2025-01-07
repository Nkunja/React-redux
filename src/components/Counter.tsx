import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { increment, decrement, reset, incrementByAmount, incrementAsync } from "../state/counter/counterSlice";

const Counter =() => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            {/* Actions included */}
            {/* <input type="number" onChange={(e) => dispatch(incrementByAmount(parseInt(e.target.value)))}/> */}
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>
            <button onClick={() => dispatch(incrementAsync(10))}>Increment By 10 Asyncronousgit</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
     );
};

export default Counter;