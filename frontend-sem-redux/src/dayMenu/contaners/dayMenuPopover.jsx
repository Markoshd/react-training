import React, { Component } from 'react'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { connect } from 'react-redux'

import Manual from '../components/manualPunchCreate'
import AbsenceCreate from '../components/absenceCreate'
import OptionSelect from './optionSelect'

import ActionTypes from '../constants/actionTypes'

class DayMenuPopover extends Component {

    render() {

        switch (this.props.optionSelected) {
            case ActionTypes.ManualPunchSelected:
                return <Manual />;
            case ActionTypes.NonattendanceSelected:
                return <AbsenceCreate />;
            default:
                return <OptionSelect/>;
        }
    }
}

function mapStateToProps(state){
    return {
        optionSelected: state.optionSelected
    };
}

export default connect(mapStateToProps)(DayMenuPopover);