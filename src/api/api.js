export function getData (limit, offset, filtered, sorted) {
  let additional = '';

  if (sorted) {
    sorted.forEach(sort => {
      additional += `sortBy=${sort.id}&sortDir=${sort.desc ? 'desc': 'asc'}&`
    });
  }

  return fetch(`http://localhost:3000/v2/dictionaries/sites/detail?limit=${limit}&offset=${offset}&${additional}`)
    .then(r => r.json());
};

export function deleteRow (id) {
  return fetch(`http://localhost:3000/v2/dictionaries/sites/${id}`, { method: 'DELETE' })
    .then(r => r.json());
};