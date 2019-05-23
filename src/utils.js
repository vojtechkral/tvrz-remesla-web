import * as R from 'ramda';
import emailValidator from 'email-validator';

const PHONE_REGEX = /^[0-9]{3} ?[0-9]{3} ?[0-9]{3}$/;

export const required = (value) => (R.isNil(value) ? 'Toto pole je povinné.' : undefined);
export const validEmail = (value) => (emailValidator.validate(value) ? undefined : 'Toto není validní e-mailová adresa.');
export const validPhone = (value) => (value.match(PHONE_REGEX) ? undefined : 'Toto pole musí být telefonní číslo ve formáto 123456789.');

export const mapKeys = R.curry((fn, obj) => R.fromPairs(R.map(R.adjust(0, fn), R.toPairs(obj))));

export const doIntervalsIntersect = (interval1, interval2) => interval2.start < interval1.end && interval1.start < interval2.end;
