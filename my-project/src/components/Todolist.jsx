import React, { useState } from 'react'

const Todolist = () => {
    const[task,setTask] = useState('');
    const[newTask,setNewTask] = useState([]);
    const handleSetTask = (e) => {
        setTask(e.target.value)
    }
    const handleAddTask = () => {
        if(task !== ''){
            setNewTask(n => [...n,task]);
            setTask('');
        }
    }
    const handleUpTask =(index)=>{
        if(index > 0){
            const tempNewTask = [...newTask];
            [tempNewTask[index],tempNewTask[index-1]] = [tempNewTask[index-1],tempNewTask[index]];
            setNewTask(tempNewTask);
        }
    }
    const handleDownTask =(index)=>{
        if(index < newTask.length-1){
            const tempNewTask = [...newTask];
            [tempNewTask[index],tempNewTask[index+1]] = [tempNewTask[index+1],tempNewTask[index]];
            setNewTask(tempNewTask);
        }
    }
    const handleDeleteTask = (index) => {
        setNewTask(n=>n.filter((_,i) => i !== index));
    }
  return (
    <>
        <div className="border">
            <h2>Todo List</h2>
            <div className='inpBtn'>
                <input type="text" id='newTask' onChange={handleSetTask} value={task} placeholder='Enter new Task'/>
                <button type="button" onClick={handleAddTask}>Add Task</button>
            </div>
            <div className='taskList'>
                {
                    newTask.map((t,i) => <div className='tasks' key={i}><p>{t}</p><button onClick={()=> handleUpTask(i)}>Up</button><button onClick={()=> handleDownTask(i)} type="button">Down</button><button onClick={()=> handleDeleteTask(i)} type="button">Delete</button></div>)
                }
            </div>
        </div>
    </>
      
  )
}

export default Todolist
