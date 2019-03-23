import * as R from 'ramda';
import {SubmissionError} from 'redux-form';
import prices from 'prices';

/* FIELDS */
export default (values) => {
    const fieldNames = R.keys(values);
    if (R.isEmpty(R.intersection(fieldNames, R.keys(prices)))) {
        throw new SubmissionError({_error: 'Nemáš vybrané žádné řemeslo.'});
    }

    return values;
};
