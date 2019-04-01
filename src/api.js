import superagent from 'superagent';
import * as R from 'ramda';

const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc3xNA_368dW2CvwbQ997jJYsCFV0KPVA81wlYO0H010Vv5ig/formResponse';

export const submit = (values) => superagent
    .post(`${CORS_URL}${FORM_URL}`)
    .type('form')
    .send(values);

const API_KEY = 'AIzaSyCqgsnrf_ptIMULLJ0bN5IWlWFZQ0VkK84';
const SPREADSHEET_ID = '1LxU5o940KeYSs5XnjtIVCIVTe7neUlqQo7akL3mBu7o';
const RANGE = 'public!A1:Q2';

const GDOC_ULR = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

const transformFreeSlots = R.pipe(
    R.prop('body'),
    R.prop('values'),
    R.apply(R.zip),
    R.fromPairs,
    R.map(parseInt),
);

export const getFreeSlots = () => superagent
    .get(GDOC_ULR)
    .then(transformFreeSlots);
