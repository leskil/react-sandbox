import * as React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Main } from "./main"
export interface RouterSampleProps {

}

export class RouterSample extends React.Component<RouterSampleProps, {}> {

    render() {
        return <BrowserRouter>
            <Main />
        </BrowserRouter>
    }

}
