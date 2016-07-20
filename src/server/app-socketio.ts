import * as Http from 'http';
import * as SocketIO from 'socket.io';

export default (server: Http.Server) => {
    var io = SocketIO.listen(server); 
    io.on('connection', (socket: SocketIO.Socket) => {
        console.log('connected'); 

        socket.on('join', (roomId: string) => {
            console.log('join: ', roomId);
            socket.join(roomId);

            //自分のみ
            io.to(socket.id).emit('join', roomId);
        });

        socket.on('send', (comment: NicoNicoDesktop.IComment) => {
            console.log(comment);
            io.to(comment.roomId).emit('flowing', comment);
        });
    });
};