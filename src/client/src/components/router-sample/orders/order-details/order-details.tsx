import * as React from "react"

export interface OrderDetailsProps {
    match: {
        params: {
            orderId: string
        }
    }
}

export class OrderDetails extends React.Component<OrderDetailsProps, {}> {

    constructor(props: any) {
        super();
    }

    render() {
        return <div>
            <h2>Order details</h2>
            <div><strong>Order no.:</strong> {this.props.match.params.orderId}</div>
        </div>
    }
}