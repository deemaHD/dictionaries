import { getData } from '../api/api';
import { deleteRow } from '../api/api';

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
    actions: ['START_LOADING', 'FINISH_LOADING', 'LOADING_FAILURE'],
    promise: deleteRow()
  }
};