// import _ from 'lodash';
// import uri from 'urijs'

const BASE_URL = 'http://localhost:3000/v2/dictionaries/sites/';

export function getData (limit, offset, filtered, sorted) {
  let additional = '';

  if (sorted) {
    sorted.forEach(sort => {
      additional += `sortBy=${sort.id}&sortDir=${sort.desc ? 'desc': 'asc'}&`
    });
  }

  return fetch(`${BASE_URL}detail?limit=${limit}&offset=${offset}&${additional}`)
    .then(r => r.json());
};

export function deleteRow (id) {
  return fetch(`${BASE_URL}${id}`, { method: 'DELETE' })
    .then(r => r.json());
};