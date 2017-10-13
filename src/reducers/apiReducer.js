import _ from 'lodash';

const defaultState = {
  data: [],
  structure: [],
  pages: null,
  loading: false,
  limit: 10,
  offset: 0,
  defaultPageSize: 20,
  fetchError: ''
};

function apiReducer (state = defaultState, action) {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, loading: true };
    case 'FINISH_LOADING':
      action.data.data.forEach(item => {
        item.niches = null;
      });

      return {
        ...state,
        structure: action.data.model.structure,
        loading: false,
        data: action.data.data,
        pages: Math.floor(action.data.count / state.limit)
      };
    case 'LOADING_FAILURE':
      console.log('LOADING_FAILURE');
      return { ...state, fetchError: 'Loading failure', loading: false };
    case 'START_DELETING':
      return state;
    case 'DELETING_SUCCESS':
      const pageData = _.cloneDeep(state.data);

      pageData.forEach((row, index) => {
        if (row.id === action.data.id) {
          pageData[index] = action.data;
        }
      });

      return { ...state, data: pageData };
    case 'DELETING_FAILURE':
      return state;
    default:
      return state;
  }
}

export default apiReducer;