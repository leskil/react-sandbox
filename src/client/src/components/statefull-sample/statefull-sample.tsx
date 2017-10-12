import * as React from "react"

export interface StatefullSampleProps {
    compiler: string,
    framework: string
}

export class StatefullSample extends React.Component<StatefullSampleProps, {}> {
    render() {
        return <h1>I'm statefull from {this.props.compiler} and {this.props.framework}!</h1>
    }
}