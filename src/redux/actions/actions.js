export function addToDo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: Math.random() * 10,
      text,
    },
  };
}

export function removeToDo(id) {
  return {
    type: 'REMOVE_TODO',
    payload: {
      id,
    },
  };
}
