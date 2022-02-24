import queryString from 'query-string';
import * as R from 'ramda';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSejh7dCAeT7_yZrB_AQ1UrbFBsHk26TD_rkEMVnOIVNUYtYXA/formResponse';

export const submit = (values) => fetch(FORM_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify(values),
});

const API_KEY = 'AIzaSyCqgsnrf_ptIMULLJ0bN5IWlWFZQ0VkK84';
const SPREADSHEET_ID = '1ivgvR6NZz27T9IUXGtHbpZqVhHZAtTWi03HtiVGfrHw';
const RANGE = 'public';

const GDOC_ULR = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

const transformFreeSlots = R.pipe(
    R.prop('values'),
    R.apply(R.zip),
    R.fromPairs,
    R.map(parseInt),
);

export const getFreeSlots = () => fetch(GDOC_ULR).then((response) => response.json()).then(transformFreeSlots);
