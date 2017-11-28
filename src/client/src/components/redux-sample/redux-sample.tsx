import * as React from "react"
import { createStore, Reducer, Action, AnyAction, Store } from "redux";

export class ReduxSampleProps {

}

export interface ReduxSampleState {
    name?: string
}

export class ReduxSample extends React.PureComponent<ReduxSampleProps, ReduxSampleState> {

    store: Store<ReduxState>

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChanged = this.handleInputChanged.bind(this)

        this.state =  {
            name: ""
        }
    }

    componentWillMount() {
        this.store = createStore(this.myReducer)
    }

    myReducer(state: ReduxState, action: AnyAction): ReduxState {
        switch (action.type) {
            case "CHANGE_USER_NAME":
                console.log("changing user name")
                var newState = {...state};
                newState.name = action.payload
                return newState
            default:
                return state
        }
    }

    handleInputChanged(e: React.FormEvent<HTMLInputElement>) {
        let name = e.currentTarget.name
        let value = e.currentTarget.value

        this.setState({
            [name]: value
        })

        console.log("react state", this.state)
        console.log("redux state", this.store.getState())
    }

    handleSubmit(e: any) {
        e.preventDefault();

        console.log(this.state)

        this.store.dispatch({
            type: "CHANGE_USER_NAME",
            payload: this.state.name
        } as ChangeNameAction)
    }

    render() {
        return <div>
            <h1>Redux sample!</h1>
            <form method="POST" action="" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChanged} />
                <button type="submit">Submit</button>
            </form>
        </div>
    }

}

class ReduxState {
    name: string
}

class ChangeNameAction implements Action {
    type: any = "CHANGE_USER_NAME"
    payload: string
}