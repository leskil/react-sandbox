import * as React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./home"
import Orders from "./orders"
import OrderDetails from "./orders/order-details"
import Profile from "./profile"
import Navigation from "./navigation"

export interface MainProps {

}

export class Main extends React.Component<MainProps, {}> {

    render() {
        return <div>
        <h1>Router example</h1>
        <Navigation />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/orders" component={Orders} />
            <Route path="/profile" component={Profile} />
        </Switch>
    </div>
    }
}