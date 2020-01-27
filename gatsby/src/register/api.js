import queryString from 'query-string';
import * as R from 'ramda';
import {CANCEL} from 'redux-saga';

const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeXfWlgY2nektgekmEZ1Ju_J95enVR0c_lyBgEmE8rJ_vYHUw/formResponse';

export const submit = (values) => fetch(`${CORS_URL}${FORM_URL}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify(values),
});

const API_KEY = 'AIzaSyCqgsnrf_ptIMULLJ0bN5IWlWFZQ0VkK84';
const SPREADSHEET_ID = '1U3NW8vBD63WtNY12KoLj3es0rFrAilalL8t9_YPY0oc';
const RANGE = 'public';

const GDOC_ULR = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

const transformFreeSlots = R.pipe(
    R.prop('values'),
    R.apply(R.zip),
    R.fromPairs,
    R.map(parseInt),
);

export const getFreeSlots = () => fetch(GDOC_ULR).then((response) => response.json()).then(transformFreeSlots);
