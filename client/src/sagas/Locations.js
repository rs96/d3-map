import { put, call, all, takeEvery } from "redux-saga/effects";

const GET_LOCATIONS = "get locations";

export function* getLocations(action) {
  console.log(action);
}
export default function* rootSaga() {
  yield all([yield takeEvery(GET_LOCATIONS, getLocations)]);
}
