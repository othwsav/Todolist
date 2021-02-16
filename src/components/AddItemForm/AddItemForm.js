import React,  { Component } from 'react'
// import './AddItemForm.css'

class AddItemForm extends Component {
    
    state = {
        date: '',
        todo: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state)
        this.setState({
            date: '',
            todo: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input id="date" onChange={this.handleChange} value={this.state.date} type="date" placeholder="Enter Date..." required/>
                    <input id="todo" onChange={this.handleChange} value={this.state.todo} type="text" placeholder="Enter What To do..." required/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddItemForm