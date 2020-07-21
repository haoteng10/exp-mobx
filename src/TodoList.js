import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class extends React.Component {
    filter(e){
        this.props.store.filter = e.target.value;
    }

    createNew(e){
        if (e.which === 13){
            this.props.store.createTodo(e.target.value);
            e.target.value = "";
        }
    }

    //Alternative: Call a function in the store to modify the state
    toggleComplete(todo){
        todo.complete = !todo.complete;
    }

    render(){
        const { clearComplete, filter, filteredTodos } = this.props.store;

        const todoList = filteredTodos.map(todo => (
            <li key={todo.id}>
                <input type="checkbox" value={todo.complete} checked={todo.complete} onChange={this.toggleComplete.bind(this, todo)}/>{todo.value}
            </li>
        ));
        return (
            <div>
                <h1>Todos</h1>
                <input onKeyPress={this.createNew.bind(this)} />
                <input value={filter} onChange={this.filter.bind(this)} />
                <ul>
                    {todoList}
                </ul>

                <button onClick={clearComplete}>Clear Completed</button>
            </div>
        
        )
    }
}