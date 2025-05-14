import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const conexao = mysql.createConnection({
  host: "switchback.proxy.rlwy.net",
  user: "root",                      
  password: "UbqVUvAelBarVyYwsiBGrDWWoIQErBAB", 
  database: "railway",               
  port: 18856,                       
  ssl: { rejectUnauthorized: false } 
});

conexao.connect(err => {
  if (err) {
    console.error('Erro ao conectar no banco:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

export default conexao;