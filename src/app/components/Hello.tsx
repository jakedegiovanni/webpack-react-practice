import * as React from "react";

interface IProps {
    compiler: string;
    framework: string;
    bundler: string;
}

export class Hello extends React.Component<IProps, {}> {
    private element: JSX.Element = (
        <h1>
            This is a {this.props.framework} application using {this.props.compiler} with {this.props.bundler}.
        </h1>
    );

    render() {
        return this.element;
    }
}