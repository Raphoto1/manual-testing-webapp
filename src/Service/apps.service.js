import { getAllAppsDao, getAppsByDevDao } from "../Dao/apps.dao.js";

export async function getAllApps(role) {
  const result = await getAllAppsDao(role);
  return result;
}

export async function getAppsByDev(dev) {
  const result = await getAppsByDevDao(dev);
  return result;
}
