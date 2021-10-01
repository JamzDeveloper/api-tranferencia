"use strict";
exports.__esModule = true;
var express_1 = require("express");
var works_1 = require("../controllers/works");
var router = (0, express_1.Router)();
//Construir los endpoints de la API
router.get('/', works_1.getWorks);
router.get('/:id', works_1.getOnceWork);
router.post('/', works_1.postWorks);
router.put('/:id', works_1.updateWorks);
router["delete"]('/:id', works_1.deleteWorks);
exports["default"] = router;
//# sourceMappingURL=works.js.map