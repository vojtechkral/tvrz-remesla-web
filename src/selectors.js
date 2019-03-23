import * as R from 'ramda';

export const getFreeSlots = (state, id) => state.freeSlots[id] || 0;
export const isSubmitted = R.prop('submitted');
