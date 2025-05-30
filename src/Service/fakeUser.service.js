// Imports app
// own imports
import { getAllFakeUsersDao } from "@/Dao/fakeUsers.dao";

export async function getAllFakeUsers() {
 const result = await getAllFakeUsersDao
 return result;
}

export async function getFakeUserById(id) {
  
}

export async function getFakeUserByApp(appId) { 

}
 
export async function createFakeUser(user) {
    const fuToCreate = {
    fu_name: user.name,
    fu_pass: user.lastName,
    phone: user.phoneNumber,
    genre: user.genre,
    email: user.email,
    app_id: user.app,
    developer_id: user.developer,
  };
  const result = await createFakeUserDao(fuToCreate);
  return result;
}  