import React from 'react';
import { Item } from './Item';


export const ListItem = (props) => {
  const tasks = props.tasks.map(task => <Item key={task.id} task={task} text={task.text} date={task.date} delete={props.delete} change={props.handleChangeTaskStatus} />)
  return (
    <>
    <div>
      <h3>Zadania do zrobienia</h3>
      {tasks}
    </div>
  <hr />
    <div>
      <h3>Zadania zrobione (0)</h3>
    </div>
    </>
    );
}
