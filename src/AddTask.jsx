import React, { Component } from 'react';



export class AddTask extends Component {
  state = {
    text: '',
    checked: false,
    date: new Date().toISOString().slice(0,10)
   }

   handleInputChange = (e) => {
     this.setState ({
       text: e.target.value
     })
   }

  render() {
    return (
      <>
      <p>Dodaj zadanie</p>
      <p><input placeholder="Dodaj zadanie" value={this.state.text} onChange={this.handleInputChange} type="text"></input>
      <input type="checkbox" checked={this.state.checked} id="important"></input>
      <label htmlFor="important">Priorytet</label></p>
      <p><label htmlFor="date">Do kiedy zrobić </label><input type="date" value={this.state.date} min="2019-01-01" max="2020-12-30"></input></p>
      <button onClick={this.handleAddTask}>Dodaj</button>



      <hr />
      </>


     )
  }
}
