import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  host: process.env.MYSQLHOST || "switchback.proxy.rlwy.net", // Usar MYSQLHOST ou fallback
  user: process.env.MYSQLUSER || "root",
  password: process.env.MYSQL_ROOT_PASSWORD || "UbqVUvAe1BarVyYws1BGrDMw01QEr8AB",
  database: process.env.MYSQL_DATABASE || "railway",
  port: process.env.MYSQLPORT || 3386,
  ssl: { rejectUnauthorized: false }, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

// Teste de conexão
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conectado ao MySQL no Railway!');
    connection.release();
  } catch (err) {
    console.error('❌ Erro ao conectar ao banco:', err);
  }
})();

export default pool;