import { createAction } from 'redux-actions';
import {
  CREATE_USER
} from '../constants/actionTypes';

export const createUser = createAction('CREATE_USER');