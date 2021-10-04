import { Request, Response } from "express";
const pool = require("../mysql/database");

export const getOperaciones = async (req: Request, res: Response) => {
  const { cuenta } = req.query;
  console.log(cuenta);
  const operaciones = await pool.query(
    `SELECT PE.nombre as 'Nombre', PE.apellido AS 'Apellidos', PE.dni AS 'Dni', OP.id_cuentadestino AS 'Cta. Destino', OP.monto_antes - OP.monto_actual as 'Monto', OP.fechayhora AS 'Fecha y Hora' FROM operacion OP INNER JOIN persona PE ON OP.id_personadest = PE.id_persona WHERE OP.id_cuentaorigen = ${""+cuenta} ORDER BY(OP.fechayhora) DESC`
  );

  res.json(operaciones);
};
