const initialState = {
  name: '',
  email: '',
  password: '',
  status: 0
};

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return { ...state, status: action.payload.status };
    case 'CHANGE_NAME_AUTH_REDUCER':
      return { ...state, name: action.payload };
    case 'CHANGE_EMAIL_AUTH_REDUCER':
      return { ...state, email: action.payload };
    case 'CHANGE_PASSWORD_AUTH_REDUCER':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default AuthenticationReducer;
