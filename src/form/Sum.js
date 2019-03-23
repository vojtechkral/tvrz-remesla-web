import * as R from 'ramda';
import {connect} from 'react-redux';
import {Alert} from 'reactstrap';
import {getFormValues} from 'redux-form';
import {createSelector} from 'reselect';
import {REGISTRATION_FORM} from '../constants';
import prices, {BASE} from '../prices';

const getSum = createSelector(
    getFormValues(REGISTRATION_FORM),
    R.pipe(
        R.defaultTo({}),
        R.keys,
        R.map(R.flip(R.prop)(prices)),
        R.filter(R.compose(R.not, R.isNil)),
        R.sum,
    ),
);

const mapStateToProps = (state) => ({
    sum: BASE + getSum(state),
});

const mergeProps = ({sum}) => ({
    children: `Za účast zaplatíš: ${sum} Kč`,
    color: 'primary',
});

export default connect(mapStateToProps, undefined, mergeProps)(Alert);
