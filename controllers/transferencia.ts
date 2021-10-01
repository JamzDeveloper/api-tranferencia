import { Request, Response } from "express";
const pool = require("../mysql/database");

export const getTransferencia = async (req: Request, res: Response) => {
  //le llega el trans
  const { monto_trans, idpersona_trans, idpersona, dni, clave } = req.query;

  const personaEnvia = await pool.query(
    `UPDATE cuenta SET saldo = saldo - ${monto_trans} WHERE id_persona = ${idpersona}`
  );
  const personaResive = await pool.query(
    ` UPDATE cuenta SET saldo = saldo + ${monto_trans} WHERE id_persona = ${idpersona_trans}`
  );
  res.json({
    personaEnvia,
    personaResive,
  });
};
