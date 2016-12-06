import Immutable from 'immutable';

export const UserState = Immutable.fromJS({
  'user': {
    id: '',
    password: '',
    role: '',
    email: ''
  }
});