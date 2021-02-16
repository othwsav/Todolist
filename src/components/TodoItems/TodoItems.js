import React from 'react'
// import './TodoItems.css'
const TodoItems = (props) => {
    const {items, deleteItem, itemDone} = props
    let Itemslength = items.length
    const ListItems = Itemslength ? items.map(item => {
            return(
                <div key={item.id} className="item">
                    <span>{item.date}</span>
                    <span>{item.todo}</span>
                    <span>{(item.done)? "Done" : "Undone"}</span>
                    <div className="actions">
                        {(item.done)? null : (<button onClick={() => itemDone(item.id)}>Done</button>)}
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </div>
                </div>
            )
        }) : (
            <div className="noItemMessage">
                There is no to do item to show, you can add one by filling the form below.
            </div>
        )
    return (
        <div className="ItemsList">
            <div>
                <span>Date</span>
                <span>To Do</span>
                <span>State</span>
                <span>Actions</span>
            </div>
            {ListItems}
        </div>
    )
}


export default TodoItems