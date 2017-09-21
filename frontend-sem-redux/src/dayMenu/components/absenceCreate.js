import React, {Component} from 'react'
import {Button, Popover , Glyphicon, Datetime} from 'react-bootstrap'
import InputMask from 'react-input-mask'

export default class AbsenceCreate extends Component {

    constructor() {
        super();

        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleShow  = this.handleShow.bind(this)
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }
    handleShow(){

        this.setState({
            checked: this.state.checked
        })
    }

    render() {
        const hidden = this.state.checked ? '' : 'hidden';

        return (
            <div className="row manual">

                <div className="col-md-12 form-group">
                    <label>
                        <input type="checkbox" /> Dia Todo
                    </label>
                </div>
                <div className="col-md-12 form-group">
                    <InputMask className="form-control"  mask="hh:mm" placeholder="Entrada"/><br/>
                    <InputMask className="form-control" mask="99:99" placeholder="Saida"/>
                    {/*<InputMask className="form-control" {...this.props} mask="99:99" placeholder="23:59" maskChar={null} />*/}
                </div>

                <div className="justification">
                    <div className="col-md-12 form-group" >
                        <label>
                            <input type="checkbox" checked={ this.state.checked } onChange={ this.handleChange }/> Justificada
                        </label>
                    </div>

                    <br/>
                    <div className={ hidden }>
                        <div className="col-md-12 form-group">
                            <select className="form-control">
                                <option>Muito vagabundo</option>
                                <option>Diarreia</option>
                                <option>Atestado falso</option>
                                <option>Vagabundagem</option>
                            </select>
                        </div>
                    </div>

                    <Button className="btn-primary">Salvar</Button>

                </div>

            </div>
        )
    }
}
