import React from 'react';
import { Item } from './Item';


export const ListItem = (props) => {
  const active = props.tasks.filter(task => task.active === true  )
  const done = props.tasks.filter(task => task.active === false )
  const activeTasks = active.map(task => <Item key={task.id} task={task} text={task.text} date={task.date} delete={props.delete} change={props.change} />)
  const doneTasks = done.map(task => <Item key={task.id} task={task} text={task.text} date={task.date} delete={props.delete} change={props.change}/>)
  return (
    <>
    <div>
      <h3>Zadania do zrobienia</h3>
      {activeTasks.length > 0 ? activeTasks : <p>Brak zadań, możesz odpocząć :D</p>}
    </div>
  <hr />
    <div>
      <h3>Zadania zrobione ({doneTasks.length})</h3>
      {doneTasks.slice(0, 2)}
    </div>
    </>
    );
}
