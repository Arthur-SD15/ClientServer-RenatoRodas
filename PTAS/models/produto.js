const db = require("../db");

class Produto {
  static async select() {
    try {
      const connect = await db.connect();
      const sql = "SELECT * FROM produtos"
      return await connect.query(sql);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }

  static async selectOne(id) {
    try {
      const connect = await db.connect();
      const sql = "SELECT * FROM produtos WHERE id=$1";
      return await connect.query(sql,[id]);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }

  static async insert(data) {
    try {
      const connect = await db.connect();
      const sql = "INSERT INTO produtos(title, price, details, imageurl, date_register) VALUES ($1, $2, $3, $4, $5);";
      const values = [data.title, data.price, data.details, data.imageurl, data.date_register];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em insert:', error);
      throw error;
    }
  }

  static async update(id, data) {
    try {
      const connect = await db.connect();
      const sql = "";
      const values = [data.title, data.price, data.details, data.imageurl, data.date_register, id];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em update:', error);
      throw error;
    }
  }

  static async delete(id) {
    try {
      const connect = await db.connect();
      const sql = "DELETE FROM produtos WHERE id = $1";
      return await connect.query(sql, [id]);
    } catch (error) {
      console.error('Erro em delete:', error);
      throw error;
    }
  }
}

module.exports = Produto;