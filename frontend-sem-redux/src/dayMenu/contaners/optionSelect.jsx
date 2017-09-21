import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link} from 'react-router'
import Manual from '../components/manualPunchCreate'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import * as chooseWhatToCreateInDay from '../actions/chooseWhatToCreateInDay'


class OptionSelect extends Component {

    constructor(props) {
        super(props);
        this.selectRootMenuAction= this.selectRootMenuAction.bind(this);
        this.selectManualPunchAction= this.selectManualPunchAction.bind(this);
        this.selectNonattendanceAction= this.selectNonattendanceAction.bind(this);
    }

    selectRootMenuAction(){
        this.props.chooseWhatToCreateInDay.selectRootMenuAction()
    }

    selectManualPunchAction(){
        this.props.chooseWhatToCreateInDay.selectManualPunchAction()
    }

    selectNonattendanceAction() {
        this.props.chooseWhatToCreateInDay.selectNonattendanceAction()
    }

    render() {
        return (
            <div className="manual">
                <Button className="btn form-control todoPopup"
                        bsStyle="primary"
                        onClick={this.selectManualPunchAction}>Marcação manual</Button>
                <br/>
                <Button className="btn form-control todoPopup"
                        bsStyle="primary"
                        onClick={this.selectNonattendanceAction}>Falta</Button>
                <br/>
                {/*<Button className="btn form-control todoPopup"*/}
                        {/*bsStyle="primary">Compensação</Button>*/}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionSelect);