import React, {Component} from 'react'
import {Button, OverlayTrigger, Popover} from 'react-bootstrap'
import DayMenuPopover from '../contaners/dayMenuPopover'

export default class DayMenu extends Component {

    render(){
        return(
            <div>
                <OverlayTrigger
                    trigger="click" ref="overlay" rootClose placement="top"
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


