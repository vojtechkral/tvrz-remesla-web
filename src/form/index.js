import {NAME} from './constants';
import {setValue} from './actions';
import {getValue} from './selectors';
import reducer from './reducer';

export default {
    NAME,
    setValue,
    getValue,
    reducer,
};
