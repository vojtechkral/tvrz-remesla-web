import * as R from 'ramda';
import {connect} from 'react-redux';
import {Alert} from 'reactstrap';
import {getFormValues} from 'redux-form';
import {createSelector} from 'reselect';
import {getPrices} from 'selectors';
import {BASE} from 'prices';
import {REGISTRATION_FORM} from '../constants';

const getSum = createSelector(
    getFormValues(REGISTRATION_FORM),
    getPrices,
    (values, prices) => R.pipe(
        R.defaultTo({}),
        R.keys,
        R.map(R.flip(R.prop)(prices)),
        R.filter(R.compose(R.not, R.isNil)),
        R.sum,
    )(values),
);

const mapStateToProps = (state) => ({
    sum: Math.max(BASE + getSum(state), 0),
});

const mergeProps = ({sum}) => ({
    children: `Za účast zaplatíš: ${sum} Kč`,
    color: 'primary',
});

export default connect(mapStateToProps, undefined, mergeProps)(Alert);
