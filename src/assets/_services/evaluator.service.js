import { appHelpers } from '../_helpers';
import { BASE_API_URL, ERROR_RESPONSE } from '../_constants';

export const evaluatorService = {
  requestForEvaluation,
  uploadEvaluationDocuments,
  fetchEvaluationStatus
}

//Request for evaluation
function requestForEvaluation(payload) {
  return appHelpers.postFormDataRequest(`${BASE_API_URL}/land-evaluation-0.0.1-SNAPSHOT/landevaluation/register`, payload, null)
    .then(res => {
      return appHelpers.formatPromiseResponse(res.data)
    }).catch(
      error => {
        let errorMessage = appHelpers.interpretErrorResponse(error)
        return appHelpers.formatPromiseResponse(errorMessage, ERROR_RESPONSE)
      }
    )
}

function uploadEvaluationDocuments(payload) {
  return appHelpers.postRequest(`${BASE_API_URL}/land-evaluation-0.0.1-SNAPSHOT/uploadMultipleFiles`, payload, null)
    .then(res => {
      return appHelpers.formatPromiseResponse(res.data)
    }).catch(
      error => {
        let errorMessage = appHelpers.interpretErrorResponse(error)
        return appHelpers.formatPromiseResponse(errorMessage, ERROR_RESPONSE)
      }
    )
}

function fetchEvaluationStatus() {
  return appHelpers.getRequest(`${BASE_API_URL}/`, null)
    .then(response => {
      return appHelpers.formatPromiseResponse(response)

    }).catch(error => {
      let errorMessage = appHelpers.interpretErrorResponse(error)
      return appHelpers.formatPromiseResponse(errorMessage, ERROR_RESPONSE)

    })
}
