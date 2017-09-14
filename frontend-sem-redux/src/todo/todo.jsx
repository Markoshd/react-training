import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import {Button, OverlayTrigger, Popover} from 'react-bootstrap'
import Dialog from 'react-bootstrap-dialog'
import DayMenu from '../dayMenu/components/dayMenu'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.state = { modalIsOpen: false }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.onClick = this.onClick.bind(this)

        this.closePopover = this.closePopover.bind(this)

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    onClick () {
        this.refs.dialog.showAlert(<Componente/>)
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    closePopover(){
        this.refs.overlay.hide()
    }

    render() {

        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />

                {/*<Button onClick={this.onClick}>Click Dialog</Button>*/}
                {/*<Dialog ref='dialog' on/>*/}

                {/*<Button onClick={this.openModal}>Click Modal</Button>*/}

                {/*<OverlayTrigger*/}
                    {/*trigger="click" ref="overlay" rootClose placement="top"*/}
                    {/*overlay={*/}
                        {/*<Popover id="popover-trigger-click-root-close" title="Falta">*/}
                            {/*<AbsenceCreate />*/}
                        {/*</Popover>}>*/}
                    {/*<Button>sei la!</Button>*/}
                {/*</OverlayTrigger>*/}

                <DayMenu />



                {/*<OverlayTrigger*/}
                    {/*trigger="click" ref="overlay" rootClose placement="top"*/}
                    {/*overlay={*/}
                        {/*<Popover id="popover-trigger-click-root-close" title="Marcação Manual">*/}
                            {/*<Manual />*/}
                            {/*<a type="button" className="cancel" onClick={this.closePopover} >Cancelar</a>*/}
                        {/*</Popover>}>*/}
                    {/*<Button>sei la!</Button>*/}
                {/*</OverlayTrigger>*/}

                {/*<Popover>*/}
                    {/*<Manual/>*/}
                    {/*<a className="buttonClose">Cancelar</a>*/}
                {/*</Popover>*/}
            </div>
        )
    }
}
