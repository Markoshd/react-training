import ActionTypes from '../constants/actionTypes'

export function selectRootMenuAction() {
    return {
        type: ActionTypes.RootMenuSelected
    };
}

export function selectManualPunchAction() {
    return {
        type: ActionTypes.ManualPunchSelected
    };
}

export function selectNonattendanceAction() {
    return {
        type: ActionTypes.NonattendanceSelected
    };
}

