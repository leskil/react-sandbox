import * as React from "react"
import { Switch, Route } from "react-router-dom"
import { OrdersList } from "./orders-list"
import OrderDetails from "./order-details"

export class Orders extends React.Component<{}, {}> {

    render() {
        return <Switch>
            <Route exact path="/orders" component={OrdersList} />
            <Route path="/orders/:orderId" component={OrderDetails} />
        </Switch>
    }

}