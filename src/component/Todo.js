import React, { Component } from 'react';


class Todo extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h1>
                    todo component
                     
                </h1>
                <h2>
                    {this.props.sendingData}
                </h2>
                
            </div>
        );
    }
}

export default Todo;
