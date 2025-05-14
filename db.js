import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const conexao = mysql.createConnection({
  host: process.env.MYSQLHOST || 'localhost',
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '',
  database: process.env.MYSQLDATABASE || 'railway',
  port: process.env.MYSQLPORT || 3306,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : null
});

conexao.connect(err => {
  if (err) {
    console.error('Erro ao conectar no banco:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

export default conexao;