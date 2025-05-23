import { getAllDevsDao } from "@/Dao/developer.dao";

export async function getAllDevs(role) {
  const result = await getAllDevsDao(role);
  console.log(result);
  return result;
}

export async function getDevById(id, role) {
  const result = await sqlConn.query("SELECT * FROM app_testing.questions WHERE id = ?", [id]);
  console.log(result);
  return result;
}

export async function createDev(data, role) {
  const result = await sqlConn.query("INSERT INTO app_testing.questions (question, answer) VALUES (?, ?)", [data.question, data.answer]);
  console.log(result);
  return result;
}

export async function updateDev(id, data, role) {
  const result = await sqlConn.query("UPDATE app_testing.questions SET question = ?, answer = ? WHERE id = ?", [data.question, data.answer, id]);
  console.log(result);
  return result;
}

export async function deleteDev(id, role) {
  const result = await sqlConn.query("DELETE FROM app_testing.questions WHERE id = ?", [id]);
  console.log(result);
  return result;
}

export async function getDevByApp(dId, role){
    const result = await sqlConn.query("SELECT * FROM app_testing.questions WHERE app_id = ?", [dId]);
    console.log(result);
    return result;
}