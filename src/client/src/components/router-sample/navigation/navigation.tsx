import * as React from "react"
import { Link } from "react-router-dom"
export interface NavigationProps {

}

export class Navigation extends React.Component<NavigationProps, {}> {

    render() {
        return <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/orders">My orders</Link></li>
                <li><Link to="/profile">My profile</Link></li>
            </ul>
        </nav>
    }

}