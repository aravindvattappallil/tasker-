import React,{ Component} from "react";
import './App.css';
import Todo from "./component/Todo"


class App extends Component{
  state = {
    mystring:"hello"
  }
  handleChange = () => {
    this.setState({
      mystring: "new"
    })
  };
  render() {
    return (
       <div className="App">
        <h1>{this.state.mystring}</h1>
        <button onClick={this.handleChange}>change text</button>
        <Todo sendingData={this.state.mystring } />
        
    </div>

    );

  }
}
export default App;
