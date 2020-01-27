import * as R from 'ramda';
import emailValidator from 'email-validator';

export const required = (value) => (R.isNil(value) ? 'Toto pole je povinné.' : undefined);
export const validEmail = (value) => (emailValidator.validate(value) ? undefined : 'Toto není validní e-mailová adresa.');

export const mapKeys = R.curry((fn, obj) => R.fromPairs(R.map(R.adjust(0, fn), R.toPairs(obj))));

export const doIntervalsIntersect = (interval1, interval2) => interval2.start < interval1.end && interval1.start < interval2.end;
