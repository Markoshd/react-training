import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link} from 'react-router'
import Manual from '../components/manualPunchCreate'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import * as chooseWhatToCreateInDay from '../actions/chooseWhatToCreateInDay'


class OptionSelect extends Component {

    render() {
        return (
            <div className="manual">
                <Button className="btn form-control todoPopup"
                        bsStyle="primary"
                        onClick={() => console.log(this.props.selectRootMenuAction)}>Marcação manual</Button>
                <br/>
                <Button className="btn form-control todoPopup"
                        bsStyle="primary"
                        onClick={() => console.log(this.props.chooseWhatToCreateInDay.selectManualPunchAction())}>Falta</Button>
                <br/>
                <Button className="btn form-control todoPopup"
                        bsStyle="primary"
                        onClick={() => console.log(this.props.chooseWhatToCreateInDay.selectManualPunchAction())}>Compensação</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        chooseWhatToCreateInDay: bindActionCreators(chooseWhatToCreateInDay, dispatch),
        // selectRootMenuAction: bindActionCreators(chooseWhatToCreateInDay.selectRootMenuAction, dispatch),
        // selectNonattendanceAction: bindActionCreators(chooseWhatToCreateInDay.selectNonattendanceAction, dispatch),
        // selectManualPunchAction: bindActionCreators(chooseWhatToCreateInDay.selectManualPunchAction, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OptionSelect);