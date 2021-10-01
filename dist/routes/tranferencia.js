"use strict";
exports.__esModule = true;
var express_1 = require("express");
var transferencia_1 = require("../controllers/transferencia");
var router = (0, express_1.Router)();
router.get("/", transferencia_1.getTransferencia);
exports["default"] = router;
//# sourceMappingURL=tranferencia.js.map