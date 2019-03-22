import {NAME} from './constants';

export const SET_VALUE = `${NAME}/SET_VALUE`;

export const setValue = (fieldName, value) => ({
    type: SET_VALUE,
    fieldName,
    value,
});
