import { Request, Response } from "express";
const pool = require("../mysql/database");

export const getTransferencia = async (req: Request, res: Response) => {
  //le llega el trans
  const { monto_trans, idpersona_trans, idpersona, dni, clave } = req.query;

  const cuenta = await pool.query(
    `SELECT *FROM cuenta where id_persona = ${idpersona}`
  );
  //console.log(cuenta);
  const dinero = await cuenta[0].saldo; //dinero de la cuenta que envia

  const cuentaResive = await pool.query(
    `SELECT *FROM cuenta where id_persona = ${idpersona_trans}`
  );
  
  const personaEnvia = await pool.query(
    `UPDATE cuenta SET saldo = saldo - ${monto_trans} WHERE id_persona = ${idpersona}`
  );
  const personaResive = await pool.query(
    ` UPDATE cuenta SET saldo = saldo + ${monto_trans} WHERE id_persona = ${idpersona_trans}`
  );

  const fecha: Date = new Date();
  //const fechaquery: string = JSON.stringify(fecha).substr(0, 11);
  //console.log( "fecha:",fecha);
  const dineroActual = dinero - Number(monto_trans);

  //console.log(dineroActual);
  //const operacion = await pool.query(`select * from  operacion`);
  //console.log(operacion);
  
  if (personaEnvia && personaResive) {
   const operation=  await pool.query(
      `insert into operacion values(${cuenta[0].id_cuenta},${cuentaResive[0].id_cuenta},CURRENT_TIMESTAMP,${dinero},${dineroActual},${idpersona})`
    );
    //console.log(operation);
  }
  // const operacion = await pool.query(`select * from  operacion`);
  // console.log(operacion);

  res.json({
    personaEnvia,
    personaResive,
  });
};
