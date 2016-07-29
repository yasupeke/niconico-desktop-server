import * as React from 'react';
import { RaisedButton , FontIcon } from 'material-ui';

interface IProps extends React.Props<{}> {
    disabled: boolean;
    onTap(good: string): void;
}

interface IState {
    disabled: boolean;
}

export default class Button8888 extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            disabled: false
        };
    }

    public handleTap(): void {
        this.props.onTap('8888');
        this.setState({
            disabled: true
        });
        setTimeout(() => {
            this.setState({
                disabled: false
            });
        }, 1000);
    }

    public render(): React.ReactElement<void> {
        return (
            <RaisedButton 
                label="8888"
                onTouchTap={this.handleTap.bind(this)}
                disabled={this.props.disabled || this.state.disabled}
            />
        );
    }
}