import React, {Component} from 'react'
import {Button, Popover} from 'react-bootstrap'
import InputJust from './inputJust'
import InputHora from './inputHora'

export default class ManualPunchCreate extends Component {
    render() {
        return (
            <div className="manual">
                <select className="form-control">
                    <option>A1!!</option>
                    <option>A2!!</option>
                    <option>A3!!</option>
                    <option>A4!!</option>
                </select><br/>
                <InputHora/><br/>
                <InputJust/>
            </div>
        )
    }
}
