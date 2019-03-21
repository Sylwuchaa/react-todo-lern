import React, { Component } from 'react';



export class AddTask extends Component {
  actualDate = new Date().toISOString().slice(0,10)
  state = {
    text: '',
    checked: false,
    date: this.actualDate,
   }

   handleInputChange = (e) => {
     this.setState ({
       text: e.target.value
     })
   }
   handleChange = (e) => {
     this.setState ({
       checked: e.target.checked
     })
   }
   handleChangeDate = (e) => {
     this.setState({
       date: e.target.value
     })
   }
   handleClick = () => {
    const {text, checked, date} = this.state
    const add = this.props.add(text, date, checked)
      if(add) {
      this.setState({
        text: '',
        checked: false,
        date: this.actualDate,
    })

      }

   }

  render() {

    let maxDate = this.actualDate.slice(0, 4) * 1 + 1
    maxDate = maxDate + "-12-31";
    console.log(maxDate);
    return (
      <>
      <p>Dodaj zadanie</p>
      <p><input placeholder="Dodaj zadanie" value={this.state.text} onChange={this.handleInputChange} type="text"></input>
      <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} id="important"></input>
      <label htmlFor="important">Priorytet</label></p>
      <p><label htmlFor="date">Do kiedy zrobić </label><input type="date" value={this.state.date} onChange={this.handleChangeDate} min={this.state.date} max={maxDate}></input></p>
      <button onClick={this.handleClick}>Dodaj</button>

      <hr />
      </>
     )
  }
}
