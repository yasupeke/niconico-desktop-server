import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Snackbar } from 'material-ui';
import ButtonGood from '../components/button-good';
import ButtonBad from '../components/button-bad';
import InputJoin from '../components/input-join';
import InputComment from '../components/input-comment';
import SelectColor from '../components/select-color';
import SelectSize from '../components/select-size';
import SelectSpeed from '../components/select-speed';

interface IProps extends React.Props<{}> {
    onJoin(roomId: string): void;
    onLeave(): void;
    onSend(comment: NicoNicoDesktop.IComment): void;
    status: NicoNicoDesktop.RoomStatus;
}

const buttonWrapperStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '28px'
}

export default class Input extends React.Component<IProps, void> {
    constructor(props: IProps) {
        super(props);
    }

    private handleJoin(roomId: string): void {
        this.props.onJoin(roomId);
    }

    private handleLeave(): void {
        this.props.onLeave();
    }

    private send(comment: string): void {
        this.props.onSend({
            roomId: (this.refs['roomid'] as InputJoin).getRoomId(),
            comment: comment,
            image: null,
            color: (this.refs['color'] as SelectColor).getColor(),
            size: (this.refs['size'] as SelectSize).getSize(),
            speed: (this.refs['speed'] as SelectSpeed).getSpeed()
        });
    }

    private handleSend(comment:string): void {
        this.send(comment);
    }

    public render(): React.ReactElement<void> {
        return (
            <div>
                <InputJoin
                    ref="roomid"
                    status={this.props.status}
                    onJoin={this.handleJoin.bind(this)}
                    onLeave={this.handleLeave.bind(this)}
                />
                <div
                    style={buttonWrapperStyles}
                >
                    <ButtonGood
                        onTap={this.handleSend.bind(this)}
                    />
                    <ButtonBad
                        onTap={this.handleSend.bind(this)}
                    />
                </div>
                <InputComment
                    onSend={this.handleSend.bind(this)}
                />
                <SelectColor ref="color" />
                <SelectSize ref="size" />
                <SelectSpeed ref="speed" />
            </div>
        );
    }
}