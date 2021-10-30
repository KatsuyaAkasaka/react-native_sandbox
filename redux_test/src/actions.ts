type valueOf<T> = T[keyof T];

export const nameTypes = {
  delete: 'DELETE_NAME',
  add: 'ADD_NAME'
}
export type nameAction = {
  type: valueOf<typeof nameTypes>
  name: string
}
export const deleteName = (): nameAction => ({
  type: 'DELETE_NAME',
  name: ''
});

export const setName = (name: string): nameAction => ({
  type: 'ADD_NAME',
  name: name,
});
