import React from 'react';

import TodoForm from  './components/TodoForm'
import TodoList from './components/TodoList'

const todosList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super()
    this.state = {
      todoItems: todosList
    }
  }

  handleNewTodo = (item) => {

    const newItem = {
      task: item,
      id: this.state.todoItems.length,
      completed: false
    }

    const newItemList = [...this.state.todoItems, newItem]

    this.setState({
      todoItems: newItemList
    })

  }

  handleToggleTodos = itemId => {
    const newTodo = this.state.todoItems.map(item => {
      if(item.id === itemId){
        return {
          ...item,
          completed: !item.completed
        }
      }else{
        return item
      }
    })
    this.setState({
      todoItems: newTodo
    })
  }

  handleClearTodo = () => {
    console.log('clearing todo')
    this.setState({
      todoItems: this.state.todoItems.filter(item => !item.completed)
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleNewTodo={this.handleNewTodo} handleClearTodo={this.handleClearTodo} />
        <TodoList todos={this.state.todoItems} handleToggleTodos={this.handleToggleTodos} />
      </div>
    );
  }

}

export default App;
