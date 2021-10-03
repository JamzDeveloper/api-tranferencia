import { Request, Response } from "express";
const pool = require("../mysql/database");

export const getSaldo = async (req: Request, res: Response) => {
  const { idpersona} = req.query;
  const cuenta = await pool.query(
    `SELECT *FROM cuenta where id_persona = ${idpersona}`
  );
  // console.log(cuenta[0].id_cuenta);
  res.json(cuenta);
};
