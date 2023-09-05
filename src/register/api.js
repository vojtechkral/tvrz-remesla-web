import queryString from 'query-string';
import * as R from 'ramda';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeaU3hyUve4IgZm7c_ejhw2Jh-R5jD0iGoRj5O1TFVcBok7yQ/formResponse';

export const submit = (values) => fetch(FORM_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify(values),
});

const API_KEY = 'AIzaSyCqgsnrf_ptIMULLJ0bN5IWlWFZQ0VkK84';
const SPREADSHEET_ID = '1fU3qCr47mUMy3QE4j8VnBTAL3VT7CAANbNw2_cfcXKE';
const RANGE = 'public';

const GDOC_ULR = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

const transformFreeSlots = R.pipe(
    R.prop('values'),
    R.apply(R.zip),
    R.fromPairs,
    R.map(parseInt),
);

export const getFreeSlots = () => fetch(GDOC_ULR).then((response) => response.json()).then(transformFreeSlots);
