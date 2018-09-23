export default (state = {}, action) => {
  switch (action.type) {
    case 'LOCATION_SUCCESS':
      return {
        result: action.payload
      }
    default:
      return state
  }
}