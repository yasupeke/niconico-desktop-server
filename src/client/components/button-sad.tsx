import * as React from 'react';
import { RaisedButton , FontIcon } from 'material-ui';
import { SocialMoodBad } from 'material-ui/svg-icons';

interface IProps extends React.Props<{}> {
    onTap(good: string): void;
}

interface IState {
    disabled: boolean;
}

export default class ButtonSad extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            disabled: false
        };
    }

    public handleTap(): void {
        this.props.onTap('(・A・)ｲｸﾅｲ!!');
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
                icon={<SocialMoodBad />}
                onTouchTap={this.handleTap.bind(this)}
                disabled={this.state.disabled}
            />
        );
    }
}