import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// export const db = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "admin",
//     database: "db_exemplo"
// })

export const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
})

db.connect((err) => {
    if(err) {
        console.log(`Erro ao se conectar ao banco de dados ${err}`)
        return
    }

    console.log(`Conecxão ao banco de dados MySql realizada com sucesso ao bd ${process.env.MYSQLDATABASE}.`)
})