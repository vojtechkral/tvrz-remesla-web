import superagent from 'superagent';

const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc3xNA_368dW2CvwbQ997jJYsCFV0KPVA81wlYO0H010Vv5ig/formResponse';

export const submit = (values) => superagent
    .post(`${CORS_URL}${FORM_URL}`)
    .type('form')
    .send(values);
