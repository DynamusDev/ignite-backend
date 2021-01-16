"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const http_1 = __importDefault(require("http"));
require("./database/connection");
dotenv_1.default.config();
const app = express_1.default();
const server = http_1.default.createServer(app);
// let io = require("socket.io")(server);
// app.use((request: Request, response: Response, next)=>{
//   request.io = io;
//   return next();
// })
const port = process.env.PORT || 3333;
app.use(cors_1.default());
app.use(cors_1.default({ origin: true, credentials: true }));
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(routes_1.routes);
server.listen(port, () => console.log("server running on port: " + port)); //Porta que a API fica escutando
