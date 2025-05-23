import { sqlConnAdmin } from "../config/db.js";

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