//The server side!
import {Server} from "socket.io";
import { createServer } from "http";
const httpServ = createServer();
const io = new Server(httpServ, {
    cors: {
        origin: "https://localhost:8080"
    }
});
//TODO: Send an event lmao


io.on("Connection", (socket)=>{
    
});

httpServ.listen(3000);