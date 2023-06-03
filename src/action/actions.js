import * as types from "./employeType";

export const ADD_EMPLOYE = (employe) => ({
  type: types.ADD_EMPLOYE,
  payload: employe,
});

export const UPDATE_EMPLOYE = (Id, employe) => ({
  type: types.UPDATE_EMPLOYE,
  Id,
  payload: employe,
});
export const REMOVE_EMPLOYE = (employe_id) => ({
  type: types.REMOVE_EMPLOYE,
  payload: employe_id,
});
export const SEARCH_EMPLOYE = (Id) => ({
  type: types.SEARCH_EMPLOYE,
  Id,
});
