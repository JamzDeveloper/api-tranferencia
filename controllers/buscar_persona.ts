import { Request, Response } from "express";
const pool = require("../mysql/database");

export const getPersona = async (req: Request, res: Response) => {
  const { dni} = req.query;
  const persona = await pool.query(
    `SELECT *FROM persona where dni=${dni}`
  );
  res.json(persona);
};
