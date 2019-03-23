import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TimeSlot} from 'components';

const VALUE = 'ANO';
const EMPTY = '';

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

const mergeProps = (stateProps, dispatchProps, {input, start, end, label}) => ({
    active: input.value !== EMPTY,
    onClick: () => input.onChange(input.value === EMPTY ? VALUE : EMPTY),
    start,
    end,
    children: label,
});

const TimeSlotInput = connect(mapStateToProps, mapDispatchToProps, mergeProps)(TimeSlot);

TimeSlotInput.propTypes = {
    input: PropTypes.shape({
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }).isRequired,
};

export default TimeSlotInput;
