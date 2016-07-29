import * as React from 'react';
import { RaisedButton , FontIcon } from 'material-ui';
import { SocialMood } from 'material-ui/svg-icons';

interface IProps extends React.Props<{}> {
    disabled: boolean;
    onTap(good: string): void;
}

interface IState {
    disabled: boolean;
}

export default class ButtonGood extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            disabled: false
        };
    }

    public handleTap(): void {
        this.props.onTap('(・∀・)ｲｲﾈ!!');
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
                icon={<SocialMood />}
                onTouchTap={this.handleTap.bind(this)}
                disabled={this.props.disabled || this.state.disabled}
            />
        );
    }
}