
import { alertConstants } from '../_constants';

export const dataActions = {
    addData
};

function addData(data) {
    return { type: alertConstants.ADDDATA, data };
}