const defaultState = {
  data: [],
  structure: [],
  pages: null,
  loading: false,
  limit: 10,
  offset: 0,
  fetchError: ''
};

function apiReducer (state = defaultState, action) {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, loading: true };
    case 'FINISH_LOADING':
      // kostyl for fit api structure
      action.data.data.forEach(item => {
        item.niches = null;
      });

      let structure = [];

      for (let key in action.data.model.structure) {
        structure.push({ Header: key, accessor: key });
      }

      return {
        ...state,
        structure,
        loading: false,
        data: action.data.data,
        pages: Math.floor(action.data.count / state.limit)
      };
    case 'LOADING_FAILURE':
      console.log('LOADING_FAILURE');
      return { ...state, fetchError: 'Loading failure' };
    default:
      return state;
  }
}

export default apiReducer;