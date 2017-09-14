import React, {Component} from 'react'
import {Button, Popover , Glyphicon} from 'react-bootstrap'

export default class AbsenceCreate extends Component {
    render() {
        return (
            <div className="manual">
                <div className="checkbox">
                    <label>
                        <input type="checkbox"/> Dia Todo
                    </label>
                </div>
                <input className="form-control" placeholder="Entrada"/><br/>
                <input className="form-control" placeholder="Saida"/>
                <div className="justification">
                    <p><Glyphicon glyph="plus" /> Justificativa</p>
                    <Button className="btn-primary">Salvar</Button>
                </div>

            </div>
        )
    }
}
