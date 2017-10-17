import * as React from "react";
import { ListItem } from "./list-item";
import { TodoItemList } from "./todo-item-list/todo-item-list"; 

export class TodoList extends React.Component<{}, {}> {

    items: Array<ListItem>;

    constructor() {
        super();
        this.items = [
            { id: 1, completed: false, text: "Learn React"},
            { id: 2, completed: false, text: "Learn Typescript"},
            { id: 3, completed: false, text: "Install Code"},
            { id: 4, completed: true, text: "Pour coffee"}
        ];

        this.handleExport = this.handleExport.bind(this)
    }

    handleExport(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        console.log(this.items)
    }

    render() {
        return <div>
            <h1>Todo list</h1>
            <TodoItemList items={this.items} />
            <button onClick={this.handleExport}>Export</button>
        </div>
    }
}