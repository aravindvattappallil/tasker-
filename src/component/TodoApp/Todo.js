import React, { Component } from 'react'
import "./Todo.css";

export class Todo extends Component {
    state = {
        input: "",
        items: []

    };
    handleChange = (event) => { 
        this.setState({
            input:event.target.value

        });
        
    };
    storeItems = (event) => {
        event.preventDefault();
        const { input } = this.state;
        
        this.setState({
            items: [...this.state.items, input],
            input:""

        });
        
    };
    deleteItem = key => {
        const allItems = this.state.items;
        allItems.splice(key, 1);
        this.setState({

            items:allItems
        });
        //items: this.state.items.filter((data, index) => index!== key)  advanced
    }
    render() {
        const { input, items } = this.state
        
        
        return (
            <div className="Todo-container">
               
                <form className="input-section" onSubmit={this.storeItems}>
                     <h1>Todo App</h1>
                    <input value={input} type="text" onChange={this.handleChange} placeholder="Enter Items..." />
                </form>
                <ul>
                    {items.map((data, index) =>(
                    <li key={index}>{data} <i onClick={()=>this.deleteItem(index)} className="fas fa-trash-alt"></i></li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}
export default Todo;