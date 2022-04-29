import Task from './Task'
  
// we don't want this to be separate form our component, we want this to be a part of our state.
const Tasks = ({tasks, onDelete, onToggle}) => {
    
  return (<>
   { 
   
   tasks.map((task) => (
   <Task key ={task.id} task ={task} onDelete ={onDelete} onToggle = {onToggle}/>))}
  </>
   
  )
}

export default Tasks
