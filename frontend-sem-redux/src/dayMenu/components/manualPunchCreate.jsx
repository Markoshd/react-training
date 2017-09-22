import React, { Component } from 'react'
import { Button, Popover } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { punchManual } from '../actions/index'

import InputJust from './inputJust'
import InputHora from './inputHora'

class ManualPunchCreate extends Component {


    constructor(props) {
        super(props);
        this.state = { value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <select name="input_type"  value={this.state.value}  onChange={this.handleChange} className="form-control">
                        <option value="1" >A1!!</option>
                        <option value="2" >A2!!</option>
                        <option value="3" >A3!!</option>
                        <option value="4" >A4!!</option>
                    </select><br/>
                    <InputHora className="input-group" type="text" value={this.state.test} onChange={this.handleChange}/><br/>
                    <InputJust className="input-group" name="justification" value={this.state.value} onChange={this.handleChange}/><br/>
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ punchManual }, dispatch);
}


export default connect(null, mapDispatchToProps)(ManualPunchCreate)
