import superagent from 'superagent';
import * as R from 'ramda';

const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc3xNA_368dW2CvwbQ997jJYsCFV0KPVA81wlYO0H010Vv5ig/formResponse';

const transformValues = (values) => ({
    'entry.2146001187': values.name,
    'entry.1672151647': values.email,
    'entry.1667341310': values.message,
    'entry.2001535182': values.med1,
    'entry.863979832': values.med2,
    'entry.599933823': values.med3,
    'entry.1210935918': values.korale1,
    'entry.425127990': values.korale2,
    'entry.1590153636': values.korale3,
    'entry.2049723369': values.korale4,
    'entry.892378742': values.korale5,
    'entry.299497980': values.tkani1,
    'entry.132012809': values.tkani2,
    'entry.905015196': values.tkani3,
    'entry.1007779779': values.lucerna1,
    'entry.1997255898': values.lucerna2,
    'entry.1324063131': values.lucerna3,
    'entry.2108715331': values.nuz,
});

export const submit = (values) => superagent
    .post(`${CORS_URL}${FORM_URL}`)
    .type('form')
    .send(transformValues(values));

const API_KEY = 'AIzaSyCqgsnrf_ptIMULLJ0bN5IWlWFZQ0VkK84';
const SPREADSHEET_ID = '1LxU5o940KeYSs5XnjtIVCIVTe7neUlqQo7akL3mBu7o';
const RANGE = 'public!A1:O2';

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
