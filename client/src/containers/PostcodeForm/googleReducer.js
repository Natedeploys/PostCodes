export default (state = {}, action) => {
  switch (action.type) {
    case 'GEOCODING_SUCCESS':
      return {
        result: action.payload.results
      }
    default:
      return state
  }
}