import { combineReducers } from "redux";
import dashboardReducer from "../dashboard/dashboardReducer";

import DashboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer
});

export default rootReducer;
