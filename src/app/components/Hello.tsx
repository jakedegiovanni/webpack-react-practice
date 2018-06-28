import * as React from "react";
import styled from "styled-components"

interface IProps {
    compiler: string;
    framework: string;
    bundler: string;
}

type IState = IProps;

export class Hello extends React.Component<IProps, Partial<IState>> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            compiler: props.compiler,
            framework: props.framework,
            bundler: props.bundler
        };
    }

    private updateElement = (event: React.FormEvent<HTMLInputElement>): void => {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    render() {
        const InputBox = styled.div`
            display: flex;
        `;

        const InputItem = styled.div`
            flex: 1;
        `;

        const InputText = styled.input`
            margin-left: 8px;
        `;

        return (
            <div>
                <div>
                    <h1>
                        This is a {this.state.framework} application using {this.state.compiler} with {this.state.bundler}.
                    </h1>
                </div>
                <InputBox>
                    <InputItem>
                        <label>
                            Framework: 
                            <InputText name="framework" value={this.state.framework} onChange={this.updateElement} />
                        </label>
                    </InputItem>
                    <InputItem>
                        <label>
                            Compiler: 
                            <InputText name="compiler" value={this.state.compiler} onChange={this.updateElement} />
                        </label>
                    </InputItem>
                    <InputItem>
                        <label>
                            Bundler: 
                            <InputText name="bundler" value={this.state.bundler} onChange={this.updateElement} />
                        </label>
                    </InputItem>
                </InputBox>
            </div>
        );
    }
}