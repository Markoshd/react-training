import React , {Component} from 'react'

export default props => {

    return (
        <div className="input-group">
            <input type="text" value={props.value} className="form-control"/>
            <span className="input-group-btn">
                <button type="submit" className="btn btn-danger">Salvar</button>
            </span>
        </div>
    )
}