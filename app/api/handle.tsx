//This document will have API handler and requester stuff
//


//Importing
import type { NextApiRequest, NextApiResponse } from "next";
import io from "socket.io";
import {useState, useEffect} from "react";

export default function handler(request: NextApiRequest, responce: NextApiResponse){
    responce.status(200).json({text: "HI"})
    // if(request.method == "POST"){
    //     responce.send("RECIEVED")
    // }else if (request.method == "GET"){
        
    // }
}


function send(responce: NextApiResponse, body: String){
    
    responce.send(body);
}