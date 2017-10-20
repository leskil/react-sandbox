import * as React from "react"
import { Link } from "react-router-dom"

export interface OrdersListState {
    orderIds: Array<string>
}

export class OrdersList extends React.Component<{}, OrdersListState> {

    constructor() {
        super();

        this.state = {
            orderIds: ["160423", "211434", "234234"]
        }
    }

    render() {
        return <div>
            <h2>Orders</h2>
            <ul>
                {this.state.orderIds.map(x => <li key={x}><Link to={`/orders/${x}`}>{x}</Link></li>)}
            </ul>
        </div>
    }

}