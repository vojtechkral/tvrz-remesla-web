export const SUBMIT = 'SUBMIT';
export const UPDATE_FREE_SLOTS = 'UPDATE_FREE_SLOTS';

export const submit = (values) => ({
    type: SUBMIT,
    values,
});

export const updateFreeSlots = (freeSlots) => ({
    type: UPDATE_FREE_SLOTS,
    freeSlots,
});
