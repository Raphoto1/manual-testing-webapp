import { sqlConnAdmin } from "@/libs/mysql";

export async function getAllFakeUsersDao() {
  const result = await sqlConnAdmin.query("SELECT * FROM app_testing.fake_users;");
  return result;
}

export async function createFakeUserDao(user) {
  const result = await sqlConnAdmin.query(
    "INSERT INTO app_testing.fake_users (fu_name, fu_pass, phone, genre, email, user_id, dev_id) VALUES (?, ?, ?, ?, ?, ?, ?);",
    [user.fu_name, user.fu_pass, user.phone, user.genre, user.email, user.user_id, user.dev_id]
  );
  return result;
}

export async function getFakeUserByTest(testId) {
  const result = await sqlConnAdmin.query("SELECT * FROM app_testing.fu_test_assigned WHERE test_id = ?;", [testId]);
  return result;
}
