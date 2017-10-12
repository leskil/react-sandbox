import * as React from "react"
import * as ReactDOM from "react-dom"
import StatelessSample from "./components/stateless-sample"

ReactDOM.render(
    <StatelessSample compiler="Typescript" framework="React" />,
    document.getElementById("app")
)