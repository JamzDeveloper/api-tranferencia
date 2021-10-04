"use strict";
exports.__esModule = true;
var express_1 = require("express");
var operaciones_1 = require("../controllers/operaciones");
var router = (0, express_1.Router)();
router.get("/", operaciones_1.getOperaciones);
exports["default"] = router;
//# sourceMappingURL=operaciones.js.map