import { url } from "../API";

export const apipoints = {
  getData: `${url}/solidState/getData`,
  getJointType: `${url}/solidState/getJointType`,
  saveSolidStateParameters: `${url}/solidState/saveSolidStateParameters`,
  insertMaterialDetails: `${url}/solidState/insertMaterialDetails`,
  deleteMaterialDetails: `${url}/solidState/deleteMaterialDetails`,
  insertParaDetails: `${url}/solidState/insertParaDetails`,
  deleteParaDetails: `${url}/solidState/deleteParaDetails`,
  allSolidStateData: `${url}/solidState/allSolidStateData`,
};
