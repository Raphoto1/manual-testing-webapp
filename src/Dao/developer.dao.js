import { sqlConnAdmin } from "../libs/mysql.js";

export async function getAllDevsDao(role) {
  if (role === "admin") {
    return sqlConnAdmin.query("SELECT * FROM app_testing.developers;");
  } else if (role === "user") {
    return sqlConnAdmin.query("SELECT * FROM app_testing.developers WHERE role = 'user';");
  } else if (role === "guest") {
    return sqlConnAdmin.query("SELECT * FROM app_testing.developers WHERE role = 'guest';");
  } else {
    throw new Error("access denied");
  }
}

export async function createDevDao(devData) {
  const { dni, dev_name, country, state, city, company } = devData;
  return sqlConnAdmin.query("INSERT INTO app_testing.developers (dni,dev_name, country, state, city, company) VALUES (?, ?, ?, ?, ?, ?);", [
    dni,
    dev_name,
    country,
    state,
    city,
    company,
  ]);
}
