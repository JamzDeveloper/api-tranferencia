import express, { Application } from "express";
import cors from "cors";
import login from "../routes/login";
import buscarPersona from "../routes/buscar_persona";
import transferencia from "../routes/transferencia";
import obtenerSaldo from "../routes/obtener_saldo";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    login: "/api/login",
    buscarPersona: "/api/buscar-persona",
    saldo: "/api/saldo",
    recarga: "/api/recarga",
    transferencia: "/api/transferencia",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.apiPaths.login, login);
    this.app.use(this.apiPaths.buscarPersona, buscarPersona);
    this.app.use(this.apiPaths.transferencia, transferencia);
    this.app.use(this.apiPaths.saldo, obtenerSaldo);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

export default Server;
