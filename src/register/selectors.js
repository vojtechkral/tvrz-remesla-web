import * as R from 'ramda';

export const getFreeSlots = (state, name) => state.freeSlots[name] || 0;
export const isSubmitted = R.prop('submitted');
export const getPrices = R.prop('price');
export const getIds = R.prop('ids');
export const getIntervals = R.prop('intervals');
