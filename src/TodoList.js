import React from 'react';
import { observer } from 'mobx-react';
import Counter from './Counter';
import './TodoList.css';

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
                <input type="checkbox" value={todo.complete} checked={todo.complete} onChange={this.toggleComplete.bind(this, todo)}/> {todo.value}
            </li>
        ));

        return (
            <div className="container">
                <div className="d-flex flex-column align-items-center">
                    <h1>Todos</h1>
                    
                    <div className="form-group">
                        <label htmlFor="createTodoInput">New items</label>
                        <input id="createTodoInput" className="form-control" onKeyPress={this.createNew.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="clearTodos">Filter items</label>
                        <input id="clearTodos" className="form-control" value={filter} onChange={this.filter.bind(this)} />
                    </div>

                    <ul>
                        {todoList}
                    </ul>

                    <button className="btn btn-primary" onClick={clearComplete}>Clear Completed</button>

                    <Counter />
                </div>
            </div>
        
        )
    }
}