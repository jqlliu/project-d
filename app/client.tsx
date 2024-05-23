import {io} from "socket.io-client";

//This file contains client sided functions 

const back = "https://localhost:3000";
const socket = io(back, {autoConnect: false});

export default socket;

export function sendMail(){

}


socket.on("Message", (message)=>{
    console.log(message);
});