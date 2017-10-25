import * as React from "react"
import { ListItem } from "./list-item"
import { TodoItemList } from "./todo-item-list/todo-item-list"
import { AddListItem } from "./add-list-item/add-list-item"

export class TodoListState {
    items: Array<ListItem>
}

export class TodoList extends React.PureComponent<{}, TodoListState> {

    constructor() {
        super();
        this.state = {
            items: [
            { id: 1, completed: false, text: "Learn React"},
            { id: 2, completed: false, text: "Learn Typescript"},
            { id: 3, completed: false, text: "Install Code"},
            { id: 4, completed: true, text: "Pour coffee"}
        ]};

        this.handleExport = this.handleExport.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
    }

    handleExport(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        console.log(this.state.items)
    }

    handleAddItem(e: string) {
        this.setState({
            items: this.state.items.concat({
                completed: false,
                text: e,
                id: 0            
            })
        })
    }

    render() {
        return <div>
            <h1>Todo list</h1>
            <AddListItem onAddItem={this.handleAddItem} />
            <TodoItemList items={this.state.items} />
            <button onClick={this.handleExport}>Export</button>
        </div>
    }
}