"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var login_1 = __importDefault(require("../routes/login"));
var buscar_persona_1 = __importDefault(require("../routes/buscar_persona"));
var transferencia_1 = __importDefault(require("../routes/transferencia"));
var obtener_saldo_1 = __importDefault(require("../routes/obtener_saldo"));
var operaciones_1 = __importDefault(require("../routes/operaciones"));
var Server = /** @class */ (function () {
    function Server() {
        this.apiPaths = {
            login: "/api/login",
            buscarPersona: "/api/buscar-persona",
            saldo: "/api/saldo",
            recarga: "/api/recarga",
            transferencia: "/api/transferencia",
            operaciones: "/api/operaciones"
        };
        this.app = (0, express_1["default"])();
        this.port = process.env.PORT || "8000";
        this.middleware();
        this.routes();
    }
    Server.prototype.middleware = function () {
        this.app.use((0, cors_1["default"])());
        this.app.use(express_1["default"].json());
        this.app.use(express_1["default"].static("public"));
    };
    Server.prototype.routes = function () {
        this.app.use(this.apiPaths.login, login_1["default"]);
        this.app.use(this.apiPaths.buscarPersona, buscar_persona_1["default"]);
        this.app.use(this.apiPaths.transferencia, transferencia_1["default"]);
        this.app.use(this.apiPaths.saldo, obtener_saldo_1["default"]);
        this.app.use(this.apiPaths.operaciones, operaciones_1["default"]);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server listening on port " + _this.port);
        });
    };
    return Server;
}());
exports["default"] = Server;
//# sourceMappingURL=server.js.map