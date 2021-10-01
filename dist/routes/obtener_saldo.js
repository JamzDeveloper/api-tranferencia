"use strict";
exports.__esModule = true;
var express_1 = require("express");
var obtener_saldo_1 = require("../controllers/obtener_saldo");
var router = (0, express_1.Router)();
router.get("/", obtener_saldo_1.getSaldo);
exports["default"] = router;
//# sourceMappingURL=obtener_saldo.js.map