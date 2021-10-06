import { Request, Response } from "express";
const pool = require("../mysql/database");

export const getOperaciones = async (req: Request, res: Response) => {
  const { cuenta } = req.query;
  console.log(cuenta);
  const operaciones = await pool.query(
    `SELECT PE.nombre as 'Nombre', PE.apellido AS 'Apellidos', PE.dni AS 'Dni',
    OP.id_cuentadestino AS 'CtaDestino', OP.monto_antes - OP.monto_actual as 'Monto', 
    OP.fecha AS 'FechayHora' FROM operacion OP INNER JOIN persona PE ON 
    OP.id_persondest = PE.id_persona  WHERE OP.id_cuentaorigen =  ${""+cuenta}
    OR OP.id_cuentadestino =  ${""+cuenta} ORDER BY(OP.fecha) DESC`
  );

  res.json(operaciones);
};
