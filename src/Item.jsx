import React from 'react';
import {ListItem} from './ListItem';

export const Item = (props) => {
  const {text, date, id } = props.task

  return (
    <p><strong>{text}</strong> do - <span>{date}</span><button onClick={() => props.change(id)}>Zostało zrobione</button><button onClick={() => props.delete(id)}>X</button></p>
   );
}
