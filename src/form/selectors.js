import * as R from 'ramda';
import {NAME} from './constants';

const getModel = R.prop(NAME);

export const getValue = (state, fieldName) => R.pipe(getModel, R.prop(fieldName), R.defaultTo(''))(state);
