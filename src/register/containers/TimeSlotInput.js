import * as R from 'ramda';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TimeSlot} from '../components';
import {getFreeSlots, isSubmitted} from '../selectors';
import {registerSlotField} from '../actions';
import {withDayContext} from './DayContext';

const EMPTY = '';

const mapStateToProps = (state, {input}) => ({
    freeSlots: getFreeSlots(state, input.name),
    submitted: isSubmitted(state),
});

const mapDispatchToProps = (dispatch, {input, day, start, end, id, price}) => ({
    onMount: () => {
        dispatch(registerSlotField({name: input.name, day, price, start, end, id}));
    },
});

const formatFreeSlots = (slots) => {
    if (slots === 0) {
        return 'Všechna místa zamluvená';
    } else if (slots === 1) {
        return '1 volné místo';
    } else if (slots < 5) {
        return `${slots} volná místa`;
    } else {
        return `${slots} volných míst`;
    }
};

const mergeProps = ({freeSlots, submitted}, {onMount}, {input, start, end, label, price, color}) => {
    const active = input.value !== EMPTY;
    const disabled = freeSlots === 0;
    return ({
        active,
        onClick: !submitted ? () => input.onChange(input.value === EMPTY ? input.name : EMPTY) : R.always,
        disabled,
        start,
        end,
        onMount,
        color,
        children: `${label}: ${price} Kč`,
        tooltip: active ? 'Rezervováno' : formatFreeSlots(freeSlots),
    });
};

const TimeSlotInput = R.compose(
    withDayContext,
    connect(mapStateToProps, mapDispatchToProps, mergeProps),
)(TimeSlot);

TimeSlotInput.propTypes = {
    input: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }).isRequired,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default TimeSlotInput;
