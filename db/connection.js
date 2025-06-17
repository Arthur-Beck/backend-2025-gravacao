import {DatabaseSync} from "node:sqlite";

import {dbPath} from "../src/utils/dbpath.js";

console.log("Caminho importado: " + dbPath);
///workspaces/backend-2025-gravacao/db/db.sqlite

let db = null;

try {
   db = new DatabaseSync(dbPath, {
    verbose: console.log,
    mode: DatabaseSync.OPEN_READWRITE | DatabaseSync.OPEN_CREATE,
   });
   console.log("Banco de dados conectado com sucesso!"); 
} catch (error) {
    console.log(error);
}

export default db;