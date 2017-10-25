import * as React from "react";
import { ListItem } from "./../list-item";
import "./todo-item.less"

export interface TodoItemProps {
    item: ListItem
}

export interface TodoItemState {
    checked: boolean
    text: string
}

export class TodoItem extends React.PureComponent<TodoItemProps, TodoItemState> {

    constructor(props: TodoItemProps) {
        super();
        this.state = {
            checked: props.item.completed,
            text: props.item.text
        }

        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            checked: e.currentTarget.checked
        })

        this.props.item.completed = e.currentTarget.checked
    }

    render() {
        return <li className={`todo-item ${this.state.checked ? "completed": ""}`}>
            <label>
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleCheck} />
                {this.state.text}
            </label>
        </li>
    }

}