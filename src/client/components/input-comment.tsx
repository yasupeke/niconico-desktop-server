import * as React from 'react';
import { TextField, RaisedButton  } from 'material-ui';
import { EditorInsertComment } from 'material-ui/svg-icons';

interface IProps extends React.Props<{}> {
    disabled: boolean;
    onSend(message: string): void;
}


interface IState {
    comment: string;
}

const wrapperStyles = {
    textAlign: 'center'
}

const textStyles = {
    marginRight: '8px'
};

export default class InputComment extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            comment: ''
        };
    }

    private handleUpdate(): void {
        const text = this.refs['comment'] as TextField;
        const comment = text.getValue();
        this.setState({ comment });
    }

    private handleKeyDown(e: KeyboardEvent): void {
        if (e.keyCode === 13) {
            this.handleSend();
        }
    }

    private handleSend(): void {
        if(this.state.comment.length === 0) {
            return;
        }
        this.props.onSend(this.state.comment);
        this.setState({
            comment: ''
        });
    }

    public render(): React.ReactElement<void> {
        return (
            <div style={wrapperStyles}>
                <TextField
                    ref="comment"
                    floatingLabelText="Comment"
                    value={this.state.comment}
                    onChange={this.handleUpdate.bind(this)}
                    onKeyDown={this.handleKeyDown.bind(this)}
                    style={textStyles}
                    disabled={this.props.disabled}
                />
                <RaisedButton 
                    icon={<EditorInsertComment />}
                    primary={true}
                    onTouchTap={this.handleSend.bind(this)}
                    disabled={this.props.disabled}
                />
            </div>
        );
    }
}