import React, { Component } from 'react'
import { Button, Popover } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nomePorDefinir } from '../actions/index'

import InputJust from './inputJust'
import InputHora from './inputHora'

class ManualPunchCreate extends Component {

    constructor(props) {
        super(props);

        this.state = { punch: ''}
        this.onSubmint = this.onSubmint.bind(this)

    }
    onSubmint(event) {
        console.log("testeee")
        event.preventDefault();

        this.props.nomePorDefinir(this.state.punch);
        this.setState({ punch : ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmint} className="input-group">
                <div className="manual">
                    <select className="form-control">
                        <option>A1!!</option>
                        <option>A2!!</option>
                        <option>A3!!</option>
                        <option>A4!!</option>
                    </select><br/>
                    <InputHora value={this.state.punch}/><br/>
                    <InputJust value={this.state.punch} onChange={ this.on}/>
                </div>
            </form>

        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ nomePorDefinir }), dispatch;
}


export default connect(mapDispatchToProps)(ManualPunchCreate)
