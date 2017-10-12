import * as React from "react"
import * as ReactDOM from "react-dom"
import StatelessSample from "./components/stateless-sample"
import StatefullSample from "./components/statefull-sample"

ReactDOM.render(
    <StatelessSample compiler="Typescript" framework="React" />,
    document.getElementById("statelessSample")
)

ReactDOM.render(
    <StatefullSample compiler="Typescript" framework="React" />,
    document.getElementById("statefullSample")
)