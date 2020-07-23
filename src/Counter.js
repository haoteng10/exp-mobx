import React, { useContext } from 'react';
import { CounterStoreContext } from './stores/CounterStore';
import {observer } from 'mobx-react';

const Counter = observer(() => {
    const CounterStore = useContext(CounterStoreContext);

    const increment = () => CounterStore.counter++;

    return (
        <div>
            <div>Counter: <span style={{color: "orange"}}>{CounterStore.counter}</span></div>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button className="btn btn-secondary" onClick={() => CounterStore.clearCounter()}>Clear</button>
        </div>
    );
});

export default Counter;