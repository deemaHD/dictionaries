const middleware = store => next => action => {
  if (action.type !== 'PROMISE') {
    return next(action);
  }

  const [startAction, succesAction, failureAction] = action.actions;

  store.dispatch({
    type: startAction,
  });

  action.promise
    .then(data => {
      store.dispatch({
        type: succesAction,
        data: data
      })
    })
    .catch(err => {
      store.dispatch({
        type: failureAction,
        err
      })
    });
}

export default middleware;