import dotenv from 'dotenv';

import express, { Request, Response } from 'express';
import bodyParser from'body-parser';
import cors from 'cors';
import  {routes} from './routes';
import http from "http";
import * as socketio from "socket.io";
import './database/connection';

dotenv.config();

const app = express();

const server = http.createServer(app);

let io = require("socket.io")(server);

app.use((request: Request, response: Response, next)=>{
  request.io = io;

  return next();
})

const port = process.env.PORT || 3333;

app.use(cors());
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(routes);

server.listen(port, () => console.log("server running on port: " + port)); //Porta que a API fica escutando
