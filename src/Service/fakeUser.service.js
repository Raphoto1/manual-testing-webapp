// Imports app
// own imports
import { getAllFakeUsersDao, createFakeUserDao } from "@/Dao/fakeUsers.dao";
import { insertFuToApp } from "./apps.service";

export async function getAllFakeUsers() {
  const result = await getAllFakeUsersDao;
  return result;
}

export async function getFakeUserById(id) {}

export async function getFakeUserByApp(appId) {}

export async function createFakeUser(user) {
  const fuToCreate = {
    fu_name: user.name,
    fu_pass: user.lastName,
    phone: user.phoneNumber,
    genre: user.genre,
    email: user.email,
    user_id: user.user_id,
    dev_id: user.dev_id,
  };
  const result = await createFakeUserDao(fuToCreate);
  const fuId = result.insertId;

  if (user.app) {
    await insertFuToApp(fuId, user.app);
  }

  return result;
}
