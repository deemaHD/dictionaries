import { getData, deleteRow } from '../api/apiService';

export const getDataAction = (limit, offset, filtered, sorted) => {
  return {
    type: 'PROMISE',
    actions: ['START_LOADING', 'FINISH_LOADING', 'LOADING_FAILURE'],
    promise: getData(limit, offset, filtered, sorted),
  };
};

export const deleteRowAction = (id) => {
  return {
    type: 'PROMISE',
    actions: ['START_DELETING', 'DELETING_SUCCESS', 'DELETING_FAILURE'],
    promise: deleteRow(id)
  }
};