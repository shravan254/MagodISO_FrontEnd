import { url } from "../API";

export const apipoints = {
  getData: `${url}/iso/getData`,
  getJobType: `${url}/iso/getJobType`,
  getComponent: `${url}/iso/getComponent`,
  getJointType: `${url}/iso/getJointType`,
  getInspection: `${url}/iso/getInspection`,
  getToolpath: `${url}/iso/getToolpath`,
  getDelivery: `${url}/iso/getDelivery`,
  getMaterialSource: `${url}/iso/getMaterialSource`,
  getTestType: `${url}/iso/getTestType`,
  getTests: `${url}/iso/getTests`,
  saveEnquiryService: `${url}/iso/saveEnquiryService`,
  saveWeldingDetails: `${url}/iso/saveWeldingDetails`,
  insertMaterialDetails: `${url}/iso/insertMaterialDetails`,
  deleteMaterialDetails: `${url}/iso/deleteMaterialDetails`,
  getTestType: `${url}/iso/getTestType`,
  getTestList: `${url}/iso/getTestList`,
};
