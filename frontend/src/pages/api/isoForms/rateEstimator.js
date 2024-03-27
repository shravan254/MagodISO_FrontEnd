import { url } from "../API";

export const apipoints = {
  getData: `${url}/rateEstimator/getData`,
  getDataCount: `${url}/rateEstimator/getDataCount`,
  getJobType: `${url}/rateEstimator/getJobType`,
  getComponent: `${url}/rateEstimator/getComponent`,
  getJointType: `${url}/rateEstimator/getJointType`,
  getInspection: `${url}/rateEstimator/getInspection`,
  getToolpath: `${url}/rateEstimator/getToolpath`,
  getDelivery: `${url}/rateEstimator/getDelivery`,
  getMaterialSource: `${url}/rateEstimator/getMaterialSource`,
  getTestType: `${url}/rateEstimator/getTestType`,
  getTests: `${url}/rateEstimator/getTests`,
  saveEnquiryService: `${url}/rateEstimator/saveEnquiryService`,
  saveWeldingDetails: `${url}/rateEstimator/saveWeldingDetails`,
  insertMaterialDetails: `${url}/rateEstimator/insertMaterialDetails`,
  updateMaterialDetails: `${url}/rateEstimator/updateMaterialDetails`,
  deleteMaterialDetails: `${url}/rateEstimator/deleteMaterialDetails`,
  getTestType: `${url}/rateEstimator/getTestType`,
  getTestList: `${url}/rateEstimator/getTestList`,
  getTestTypeName: `${url}/rateEstimator/getTestTypeName`,
  insertTestDetails: `${url}/rateEstimator/insertTestDetails`,
  deleteTestDetails: `${url}/rateEstimator/deleteTestDetails`,
  saveRiskDetails: `${url}/rateEstimator/saveRiskDetails`,
  insertRiskDetails: `${url}/rateEstimator/insertRiskDetails`,
  deleteRiskDetails: `${url}/rateEstimator/deleteRiskDetails`,
  allQtnData: `${url}/rateEstimator/allQtnData`,
  saveQuoteDetails: `${url}/rateEstimator/saveQuoteDetails`,
  insertQuoteDetails: `${url}/rateEstimator/insertQuoteDetails`,
  updateQuoteRegister: `${url}/rateEstimator/updateQuoteRegister`,
  deleteQuoteDetails: `${url}/rateEstimator/deleteQuoteDetails`,
};