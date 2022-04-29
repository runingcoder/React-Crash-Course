import { useState, useEffect } from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Header from './components/header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/footer';
import About from './components/About';

function App() {
  const [addStatus, setAddStatus] = useState(false);
  const [tasks, setTasks] = useState([])

useEffect(() => {
  const getTasks = async () => {
  const tasksFromServer = await fetchTasks()
  setTasks(tasksFromServer)
  
  }
  getTasks()
}, [])
const fetchTasks = async () => {
  
  const res = await fetch('http://127.0.0.1:5000/tasks')
  const data = await res.json()
  console.log(data)
  return data

  }

  const fetchTask = async (id) => {
  
    const res = await fetch(`http://127.0.0.1:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  
    }
const onAdd = async (task) => {
  const res = await fetch('http://127.0.0.1:5000/tasks', {
    method: 'POST',	
    headers:{
      'Content-type': 'application/json',

    },
    body: JSON.stringify(task),
  })
const data = await res.json()
setTasks([...tasks, data])
  // const newTask = {
  //   id: Math.floor(Math.random() * 10000 - 1),
  //   text,
  //   day,
  //   reminder,
  // }
  // setTasks([...tasks, newTask])
}


// delete the task
const deleteTask = async (id) => {

  await fetch(`http://127.0.0.1:5000/tasks/${id}`, {method: 'DELETE'})
  setTasks(tasks.filter(task => task.id !== id))
}
// ontoggle , if true, change the value to false, if false, change the value to true
const onToggle = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle,
     reminder: !taskToToggle.reminder}

const res = await fetch(`http://127.0.0.1:5000/tasks/${id}`, {
  method: 'PUT',
  headers: {'Content-type': 'application/json'},
  body: JSON.stringify(updTask)
})
const data = await res.json()
  setTasks(tasks.map(task => task.id ===id?{...task, reminder :data.reminder}:task))}


  return (
    <Router> 
    
    <div className="container">

      <Header addclick ={()=> setAddStatus(!addStatus)} addStatus= {addStatus}/>

      <Routes> 
        <Route path='/' element ={(
<>



      {addStatus && <AddTask onAdd ={onAdd} addForm ={AddTask}/>}
      {tasks.length>0? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {onToggle}/> : "No tasks"}
     

</>


        )}/>
      </Routes>
     <Routes>

     
        
           <Route path ="/about" element = {<About/>}/>
     </Routes>
     
        
     
      <Footer/>
    </div>	
   
    </Router>
    
  );
}

export default App;
