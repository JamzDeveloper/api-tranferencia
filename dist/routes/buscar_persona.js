"use strict";
exports.__esModule = true;
var express_1 = require("express");
var buscar_persona_1 = require("../controllers/buscar_persona");
var router = (0, express_1.Router)();
router.get("/", buscar_persona_1.getPersona);
exports["default"] = router;
//# sourceMappingURL=buscar_persona.js.map