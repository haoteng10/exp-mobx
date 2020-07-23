import { createContext } from 'react';
import { observable, action } from 'mobx';

class CounterStore {
    @observable counter = 0;

    @action
    clearCounter(){
        this.counter = 0;
    }
}

export const CounterStoreContext = createContext(new CounterStore());

