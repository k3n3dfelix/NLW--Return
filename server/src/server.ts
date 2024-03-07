import express from "express";

import { routes } from "./routes";

const app = express();

app.use(express.json());
// Middleware para habilitar o CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Ou especifique as origens permitidas, por exemplo: 'http://example.com'
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server is running!!!");
});
