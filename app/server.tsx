//The server side!
import {Server} from "socket.io";

const io = new Server({});

io.on("Connection", (socket)=>{

});

io.listen(3000);