export const checkLogin = () => {
  return {
    type: 'CHANGE_STATUS',
    payload: {
      status: 0
    }
  };
};

export const changeName = name => {
  return {
    type: 'CHANGE_NAME_AUTH_REDUCER',
    payload: name
  };
};

export const changePassword = password => {
  return {
    type: 'CHANGE_EMAIL_AUTH_REDUCER',
    payload: password
  };
};

export const changeEmail = email => {
  return {
    type: 'CHANGE_PASSWORD_AUTH_REDUCER',
    payload: email
  };
};
