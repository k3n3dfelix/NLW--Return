"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Middleware para habilitar o CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Ou especifique as origens permitidas, por exemplo: 'http://example.com'
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(routes_1.routes);
app.listen(3333, () => {
    console.log("HTTP server is running!!!");
});
