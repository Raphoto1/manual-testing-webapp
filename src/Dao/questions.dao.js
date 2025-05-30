import { sqlConnAdmin } from "@/libs/mysql";

export async function getQuestions() {
    const result = await sqlConnAdmin.query("SELECT * FROM app_testing.questions;")
    return result;
}
 
export async function getQuestionsByApp(appId) {
  const result = await sqlConnAdmin.query("SELECT * FROM app_testing.questions WHERE appId = ?;", [appId]);
  return result;
}

export async function getQuestionsByDev(devId) {
  const result = await sqlConnAdmin.query("SELECT * FROM app_testing.questions WHERE devId = ?;", [devId]);
  return result;
}

export async function createQuestion(data) {  
  // Insert the question into the database
  const result = await sqlConnAdmin.query(
    "INSERT INTO app_testing.questions (question, spected_answer, screen_capture, user_id, q_type) VALUES (?, ?, ?, ?, ?);",
    [data.question, data.spected_answer, data.screen_capture, data.user__id, data.q_type]
  );
  
  return { message: "Question created successfully", id: result.insertId };
}   