export const SUBMIT = 'SUBMIT';
export const UPDATE_FREE_SLOTS = 'UPDATE_FREE_SLOTS';
export const SUBMIT_COMPLETE = 'SUBMIT_COMPLETE';
export const REGISTER_SLOT_FIELD = 'REGISTER_SLOT_FIELD';
export const REGISTER_FIELD = 'REGISTER_FIELD';

export const submit = (values) => ({
    type: SUBMIT,
    values,
});

export const updateFreeSlots = (freeSlots) => ({
    type: UPDATE_FREE_SLOTS,
    freeSlots,
});

export const submitComplete = () => ({
    type: SUBMIT_COMPLETE,
});

export const registerSlotField = ({name, id, start, end, day, price}) => ({
    type: REGISTER_SLOT_FIELD,
    name,
    id,
    start,
    end,
    day,
    price,
});

export const registerField = (name, id) => ({
    type: REGISTER_FIELD,
    name,
    id,
});
