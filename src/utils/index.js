import * as R from 'ramda';
import emailValidator from 'email-validator';

export const required = (value) => (R.isNil(value) ? 'Toto pole je povinné.' : undefined);
export const validEmail = (value) => (emailValidator.validate(value) ? undefined : 'Toto není validní e-mailová adresa.');
