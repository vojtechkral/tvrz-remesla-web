import * as R from 'ramda';
import {takeEvery, call, put, delay, select} from 'redux-saga/effects';
import {doIntervalsIntersect, mapKeys} from './utils';
import {SUBMIT, updateFreeSlots, submitComplete} from './actions';
import {getIds, getIntervals} from './selectors';
import {submit, getFreeSlots} from './api';

const validate = function* validate(values) {
    const intervals = yield select(getIntervals);
    if (R.isEmpty(R.intersection(
        R.map(R.prop('name'), intervals),
        R.keys(values),
    ))) {
        return 'Nemáš vybraný žádný blok s řemesly.';
    }

    if (!R.pipe(
        R.filter(({name}) => R.keys(values).includes(name)),
        R.groupBy(R.prop('day')),
        R.values,
        R.all(R.pipe(
            R.groupWith(doIntervalsIntersect),
            R.map(R.length),
            R.all(R.equals(1)),
        )),
    )(intervals)) {
        return 'Některé bloky řemesel se ti překrývají.';
    }

    return undefined;
};

const submitForm = function* submitForm({values}) {
    const error = yield call(validate, values);
    if (error) {
        console.log(error);
    } else {
        return;
        const ids = yield select(getIds);
        const request = mapKeys(R.flip(R.prop)(ids), values);
        yield call(submit, request);
        yield put(submitComplete());
    }
};

const loadFreeSlots = function* loadFreeSlots() {
    const freeSlots = yield call(getFreeSlots);
    yield put(updateFreeSlots(freeSlots));
};

export default function* () {
    yield takeEvery(SUBMIT, submitForm);
    for (;;) {
        yield call(loadFreeSlots);
        yield delay(5000);
    }
}
