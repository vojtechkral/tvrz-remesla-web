import * as R from 'ramda';
import {SubmissionError} from 'redux-form';
import {doIntervalsIntersect} from './utils';
import {submit} from './actions';

const error = (message) => {
    throw new SubmissionError({_error: message});
};

export default (values, dispatch, {intervals}) => {
    if (R.isEmpty(R.intersection(
        R.map(R.prop('name'), intervals),
        R.keys(values),
    ))) {
        error('Nemáš vybraný žádný blok s řemesly.');
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
        error('Některé bloky řemesel se ti překrývají.');
    }

    dispatch(submit(values));
};
