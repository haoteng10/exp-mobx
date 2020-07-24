import React, { useContext } from 'react';
import { CounterStoreContext } from './stores/CounterStore';
import { observer } from 'mobx-react';

const Counter = observer(() => {
    const CounterStore = useContext(CounterStoreContext);

    const increment = () => CounterStore.counter++;

    return (
        <div style={{"margin-top": "25px"}}>
            <h3>Counter: <span style={{color: "orange"}}>{CounterStore.counter}</span></h3>
            <button className="btn btn-success" onClick={increment}>Increment</button>
            <button className="btn btn-warning" onClick={() => CounterStore.clearCounter()}>Clear</button>
        </div>
    );
});

export default Counter;