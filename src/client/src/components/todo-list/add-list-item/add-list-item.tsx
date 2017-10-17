import * as React from "react"

export interface AddListItemProps {
    onAddItem: (text: string) => void
}

export interface AddListItemState {
    text: string
}

export class AddListItem extends React.Component<AddListItemProps, AddListItemState> {

    constructor() {
        super();
        this.state = {
            text: ""
        }

        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    private clearInput() {
        this.setState({
            text: ""
        })
    }

    handleTextChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            text: e.currentTarget.value
        })
    }

    handleSubmit(e: any) {
        e.preventDefault();

        console.log(this.state)
        this.props.onAddItem(this.state.text);
        this.clearInput()
    }

    render() {
        return <form onSubmit={this.handleSubmit} method="POST" action="">
            <input
                type="text"
                onChange={this.handleTextChange}
                value={this.state.text} />
            <button type="submit">Add</button>
        </form>
    }

}