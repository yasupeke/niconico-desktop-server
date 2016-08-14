import * as React from 'react';
import { RaisedButton , FontIcon } from 'material-ui';

interface IProps extends React.Props<{}> {
    disabled: boolean;
    onTap(good: string): void;
}

interface IState {
    disabled: boolean;
}

export default class ButtonWWW extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            disabled: false
        };
    }

    public handleTap(): void {
        this.props.onTap('www');
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
                label="www"
                onTouchTap={this.handleTap.bind(this)}
                disabled={this.props.disabled || this.state.disabled}
            />
        );
    }
}