import { computed, observable, action } from 'mobx';

class Todo {
    @observable value
    @observable id
    @observable complete

    constructor(value){
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }

    @action
    toggleComplete(){
        this.complete = !this.complete;
    }
}

class TodoStore {
    @observable todos = [];
    @observable filter = "";

    @computed get filteredTodos(){
        const matchesFilter = new RegExp(this.filter, "i");
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value));
    }

    @action
    createTodo(value){
        this.todos.push(new Todo(value));
    }

    @action
    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.complete);
        this.todos.replace(incompleteTodos);
    }
}

export default new TodoStore();