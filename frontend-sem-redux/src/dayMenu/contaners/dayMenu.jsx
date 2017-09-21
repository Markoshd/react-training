import React, {Component} from 'react'
import {Button, OverlayTrigger, Popover} from 'react-bootstrap'
import DayMenuPopover from './dayMenuPopover'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { selectRootMenuAction } from '../actions/chooseWhatToCreateInDay'

class DayMenu extends Component {
    constructor(props) {
        super(props);

        this.selectRootMenuAction = this.selectRootMenuAction.bind(this);
    }

    selectRootMenuAction(){
        this.props.selectRootMenuAction()
    }


    render(){
        return(
            <div>
                <OverlayTrigger
                    trigger="click" ref="overlay" rootClose placement="bottom" onExited={this.selectRootMenuAction}
                    overlay={
                        <Popover id="popover-trigger-click-root-close" title="bla bla">
                            <DayMenuPopover />
                        </Popover>}>
                    <Button className="btn-primary">+ Adicionar</Button>
                </OverlayTrigger>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        selectRootMenuAction: bindActionCreators(selectRootMenuAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayMenu);