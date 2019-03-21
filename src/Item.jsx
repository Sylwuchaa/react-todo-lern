import React from 'react';
import {ListItem} from './ListItem';

export const Item = (props) => {
  const {text, date, id, active, important, finishDate } = props.task
  const redStyle = {
    color: 'red'
  }
  const actualDate = new Date(finishDate).toLocaleString()


  if(active) {
  return (
    <p><strong style={important ? redStyle : null }>{text}</strong> do - <span>{date}</span><button onClick={() => props.change(id)}>Zostało zrobione</button><button onClick={() => props.delete(id)}>X</button></p>
   );
  }else {
    return (
      <p><strong>{text}</strong> (zrobić do - <span>{date}</span>)
      potwierdzono wykonanie - {actualDate}
      <button onClick={() => props.delete(id)}>X</button></p>
      )


  }

  }
