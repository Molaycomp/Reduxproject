import changeNumber from "./upDown";
import changeNumberr from "./calculator";

import {combineReducers} from "redux";

const rootReducers=combineReducers({
    changeNumber,changeNumberr
})

export default rootReducers;