import * as React from "react";
import { ListItem } from "./../list-item";
import { TodoItem } from "./../todo-item/todo-item";

export interface TodoItemListProps {
    items: Array<ListItem>
}

export class TodoItemList extends React.Component<TodoItemListProps, {}> {

    constructor() {
        super();
    }

    render() {
        var itemsList = this.props.items.map(x => <TodoItem item={x} key={x.id}/>);
        
        return <ul>
            {itemsList}
        </ul>;
    }
}