import { sqlConnAdmin } from "../libs/mysql.js";

export async function getAllAppsDao(role) {
  if (role === "admin") {
    return await sqlConnAdmin.query("SELECT * FROM app_testing.apps;");
  } else if (role === "user") {
    return sqlConn.query("SELECT * FROM app_testing.apps WHERE role = 'user';");
  } else if (role === "guest") {
    return sqlConn.query("SELECT * FROM app_testing.apps WHERE role = 'guest';");
  } else {
    throw new Error("access denied");
  }
}

export async function getAppsByDevDao(Dev) {
  return await sqlConnAdmin.query("SELECT * FROM app_testing.apps WHERE dev_id = ?;", [Dev]);
}
