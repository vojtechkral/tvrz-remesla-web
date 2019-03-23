import * as R from 'ramda';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TimeSlot} from 'components';
import {getFreeSlots, isSubmitted} from 'selectors';

const VALUE = 'ANO';
const EMPTY = '';

const mapStateToProps = (state, {input}) => ({
    freeSlots: getFreeSlots(state, input.name),
    submitted: isSubmitted(state),
});

const mergeProps = ({freeSlots, submitted}, dispatchProps, {input, start, end, label}) => {
    const active = input.value !== EMPTY;
    const disabled = freeSlots === 0;
    return ({
        active,
        onClick: !submitted ? () => input.onChange(input.value === EMPTY ? VALUE : EMPTY) : R.always,
        disabled,
        start,
        end,
        children: label,
    });
};

const TimeSlotInput = connect(mapStateToProps, undefined, mergeProps)(TimeSlot);

TimeSlotInput.propTypes = {
    input: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }).isRequired,
};

export default TimeSlotInput;
