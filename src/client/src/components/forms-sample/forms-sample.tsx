import * as React from "react"
import "./forms.less"

export interface FormsSampleProps {

}

export interface FormsSampleState {
    firstName?: string
    lastName?: string
    age?: number;    
}

export class FormsSample extends React.Component<FormsSampleProps, FormsSampleState> {

    constructor(props: FormsSampleProps) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleInputChanged = this.handleInputChanged.bind(this)

        this.state = {
            firstName: "",
            lastName: "",
            age: 0
        }
    }

    handleSubmit(e: any) {
        e.preventDefault()
        console.log(this.state)
    }

    handleClear(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        
        this.setState({
            firstName: "",
            lastName: "",
            age: 0
        });
    }

    handleInputChanged(e: React.FormEvent<HTMLInputElement>) {
        let name = e.currentTarget.name
        let value = e.currentTarget.value

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form method="POST" action="" onSubmit={this.handleSubmit}>
                <label htmlFor="firstName">First name:</label>
                <input type="text" name="firstName" id="firstName" onChange={this.handleInputChanged} value={this.state.firstName} />

                <label htmlFor="lastName">Last name:</label>
                <input type="text" name="lastName" id="lastName" onChange={this.handleInputChanged} value={this.state.lastName} />

                <label htmlFor="age">Age:</label>
                <input type="number" name="age" id="age" onChange={this.handleInputChanged} value={this.state.age} />

                <button type="button" onClick={this.handleClear}>Clear</button>
                <button type="submit">Submit</button>
            </form>
        )
    }
}