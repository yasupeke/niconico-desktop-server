import * as SocketIO from 'socket.io-client';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import Input from '../views/containers/input';

const socket = SocketIO(location.origin);

function onJoin(roomId: string): void {
    socket.emit('join', roomId);
}

function onLeave(): void {
    socket.emit('leave');
}

function onSend(comment: NicoNicoDesktop.IComment): void {
    socket.emit('send', comment);
}

function render(status: NicoNicoDesktop.RoomStatus): void {
    ReactDom.render(
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Input
                status={status}
                onSend={onSend}
                onJoin={onJoin}
                onLeave={onLeave}
            />
        </MuiThemeProvider>,
        document.querySelector('#comment')
    );
}

injectTapEventPlugin();

socket.on('connect', () => {
    console.info('connected');
    render(NicoNicoDesktop.RoomStatus.Logout);
});

socket.on('join', () => {
    render(NicoNicoDesktop.RoomStatus.Login);
});

socket.on('leave', () => {
    console.info('leave');
    render(NicoNicoDesktop.RoomStatus.Logout);
});
