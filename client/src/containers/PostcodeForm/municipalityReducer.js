export default (state = {}, action) => {
  switch (action.type) {
    case 'MUNICIPALITY_SUCCESS':
      return {
        result: action.payload
      }
    default:
      return state
  }
}