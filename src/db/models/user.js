import statusUtil from "../../utils/statusUtil";
import pool from "../pool";

const tableName = "USERS";

const user = {
  selectAll: async () => {
    const query = `SELECT * FROM ${tableName}`;
    const result = await pool.query(query);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
  insert: async (userId, userName) => {
    const query = `INSERT INTO ${tableName} (USERID, USERNAME) VALUES (?, ?)`;
    const result = await pool.query(query, [userId, userName]);

    return result ? statusUtil.success(result) : statusUtil.false();
  },
};

export default user;