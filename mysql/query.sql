SELECT PE.nombre as 'Nombre', PE.apellido AS 'Apellidos', PE.dni AS 'Dni', 
OP.id_cuentadestino AS 'Cta. Destino', OP.monto_antes - OP.monto_actual as 'Monto',
 OP.fechayhora AS 'Fecha y Hora' FROM operacion OP 
INNER JOIN cuenta CU ON OP.id_cuentadestino = CU.id_cuenta 
INNER JOIN persona PE ON OP.id_personadest = PE.id_persona 
GROUP BY (OP.id_cuentaorigen) ORDER BY(OP.fechayhora) DESC