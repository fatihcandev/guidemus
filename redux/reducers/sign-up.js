const initialState = {
  name: '',
  email: '',
  pass: ''
}

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.name }
    case 'CHANGE_EMAIL':
      return { ...state, email: action.email }
    case 'CHANGE_PASS':
      return { ...state, pass: action.pass }
    default:
      return state
  }
}

export default signUpReducer
