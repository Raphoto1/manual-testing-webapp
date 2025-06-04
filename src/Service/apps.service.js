import { getAllAppsDao, getAppsByDevDao } from "../Dao/apps.dao.js";

export async function getAllApps(role) {
  const result = await getAllAppsDao(role);
  return result;
}

export async function getAppsByDev(dev) {
  const result = await getAppsByDevDao(dev);
  return result;
}

export async function getAppsByUser(userId) {
  // This function should handle the logic to get apps by user ID
  // It is not implemented in this snippet, but you can add it as needed
  // Example: await getAppsByUserDao(userId);
  console.log(`Fetching apps for user with ID ${userId}`);
  
  return { message: "Function to get apps by user is not implemented yet." };
}

export async function insertFuToApp(fuId, appId) {
  // This function should handle the logic to insert the fake user into the app
  // It is not implemented in this snippet, but you can add it as needed
  // Example: await insertFakeUserToAppDao(fuId, appId);
  console.log(`Inserting fake user with ID ${fuId} into app with ID ${appId}`);
  
  return { message: "Function to insert fake user into app is not implemented yet." };
}
