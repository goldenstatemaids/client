import React, {Component} from "react";
import "./button.component.scss";

interface Props {
    style: "primary" | "transparent" | "light";
}

class ButtonComponent extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <button className={`gsm-btn ${this.props.style}`}>
                {this.props.children}
            </button>
        );
    }
}

export default ButtonComponent;