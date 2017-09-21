import React , {Component} from 'react'

export default class inputJust extends Component{

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-danger">Salvar</button>
                </span>
            </div>
        )
    }


}