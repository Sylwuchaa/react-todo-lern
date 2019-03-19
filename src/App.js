import React, { Component} from 'react';
import './App.css';
import {ListItem} from './ListItem';
class App extends Component {
  state = {
  tasks: [{
    id: 0,
    text: 'nauczyć się Reduxa',
    active: true,
    date: '2019-03-31',
    important: true,
    finishDate: null,
  },{
    id: 1,
    text: 'nauczyć się TypeScripta',
    active: true,
    date: '2019-04-30',
    important: true,
    finishDate: null,
  },{
    id: 2,
    text: 'kupić rower',
    active: true,
    date: '2019-06-30',
    important: true,
    finishDate: null,
  },{
    id: 3,
    text: 'naprawić samochód',
    active: true,
    date: '2019-05-30',
    important: true,
    finishDate: null,
  }
]}

  deleteTask = (id) => {
    const tasks = [...this.state.tasks]

    const index = tasks.filter(task => task.id === id)

    const deleteTask = tasks.splice(index, 1)
    console.log(index);

    this.setState({
      tasks
    })
  }
  handleChangeTaskStatus = (id) => {
    console.log('done'  + id);
    const tasks = [...this.state.tasks]
    tasks.map(task => {
      if (task.id === id) {
          task.active = false;
          task.finishDate = new Date().getTime()
          console.log(task.active);
        }
    })
    this.setState({
      tasks
    })
  }
  render() {
    return (
      <ListItem tasks={this.state.tasks} change={this.handleChangeTaskStatus} delete={this.deleteTask} />
    );
  }
}

export default App;
