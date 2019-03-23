import * as R from 'ramda';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TimeSlot} from 'components';
import {getFreeSlots, isSubmitted} from 'selectors';
import prices from 'prices';

const VALUE = 'ANO';
const EMPTY = '';

const mapStateToProps = (state, {input}) => ({
    freeSlots: getFreeSlots(state, input.name),
    submitted: isSubmitted(state),
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

const mergeProps = ({freeSlots, submitted}, dispatchProps, {input, start, end, label}) => {
    const active = input.value !== EMPTY;
    const disabled = freeSlots === 0;
    return ({
        active,
        onClick: !submitted ? () => input.onChange(input.value === EMPTY ? VALUE : EMPTY) : R.always,
        disabled,
        start,
        end,
        children: `${label}: ${prices[input.name]} Kč`,
        tooltip: active ? 'Rezervováno' : formatFreeSlots(freeSlots),
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
