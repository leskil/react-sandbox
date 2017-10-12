import * as React from "react";

export interface StatelessSampleProps { compiler: string, framework: string}
export const StatelessSample = (props: StatelessSampleProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;