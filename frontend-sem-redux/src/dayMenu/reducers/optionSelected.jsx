import ActionTypes from '../constants/actionTypes'

export function optionSelected(state = ActionTypes.RootMenuSelected, action) {

    switch(action) {

        case ActionTypes.ManualPunchSelected:
            return ActionTypes.ManualPunchSelected;

        case ActionTypes.NonattendanceSelected:
            return ActionTypes.NonattendanceSelected;

        default:
            return state;
    }

}