import React, {Component} from 'react'
import TodoItems from './components/TodoItems/TodoItems'
import AddItemForm from './components/AddItemForm/AddItemForm'
import './App.css'

class App extends Component {
	state = {
		items : [
			{id:1, todo:"I will Learn React", date:"2021-02-15", done:true},
			{id:2, todo:"I will do a simple To do App", date:"2021-02-16", done:true},
			{id:3, todo:"I will Push my first React App to github", date:"2021-02-16", done:true},
			{id:4, todo:"Go follow me on twitter", date:"2021-02-16", done:false},
			{id:5, todo:"I will do a second App", date:"2021-02-17", done:false}
		]
	}

	deleteItem = (id) => {
		// first method
		// let items = this.state.items,
		// 	i = items.findIndex(item => item.id === id)
		// items.splice(i,1)

		// second method
		let items = this.state.items.filter(e => e.id !== id)
		this.setState({items})
	}

	itemDone = (id) => {
		let items = this.state.items,
			i = items.findIndex(item => item.id === id)
		items[i].done = true
		this.setState({items})
	}

	addItem = (item) => {
		item.id = Math.random()
		item.done = false
		this.setState({
			items: [...this.state.items, item]
		})
	}

	render() {
		return (
			<div className="App">
				<h1>To do list App</h1>
				<TodoItems items={this.state.items} deleteItem={this.deleteItem} itemDone={this.itemDone}/>
				<AddItemForm addItem={this.addItem}/>
			</div>
		)
	}
}

export default App;
