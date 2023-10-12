import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  database: "megak_santas_gifts",
  namedPlaceholders: true,
  decimalNumbers: true,
});
