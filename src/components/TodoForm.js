import React from 'react'

class TodoForm extends React.Component {
  constructor(){
    super()
    this.state = {
      inputValue: ''
    }
  }

  handleInputValue = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleNewTodo(this.state.inputValue)

    this.setState({
      inputValue: ''
    })
  }

  handleClear = () => {
    this.props.handleClearTodo()
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Your todo" onChange={this.handleInputValue} value={this.state.inputValue} type="text" name="todo" />
        <button>Add Todo</button>
        <button onClick={this.handleClear}>Clear Todos</button>
      </form>
    )
  }
}

export default TodoForm