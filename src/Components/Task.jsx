import React, { useState } from "react";
import './task.css'


const Task = () => {
  const[tasks,setTasks]=useState([])
  const [title, setTitle] = useState("");
  const[description, setDescription]=useState("");
  const[currentItem,setCurrentItem]=useState(null);

  const addData=()=>{
    if(title.trim()==="" || description.trim()==="")return;
    const newTask={
        index:Date.now(),
        title,
        description,
    };
    setTasks([...tasks,newTask]);
    setTitle("");
    setDescription("");
  };
  const deleteData=(index)=>{
    setTasks(tasks.filter((task)=>task.index!==index));
  };
  const addUpdateData=(task)=>{
    setCurrentItem(task);
    setTitle(task.title);
    setDescription(task.description);
  };
  const updateData=()=>{
    const updatedDatas= tasks.map((task)=> task.index===currentItem.index ? {...task,title,description}:task);
    setTasks(updatedDatas);
    setTitle("");
    setDescription("");
    setCurrentItem(null);

  };
  return (
    <>
      <div className="main">
        <h1 className="heading">Task manager</h1>
        <div className="content">
            <input className="inputarea" type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input className="inputareadesc" type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            {
                currentItem ? (<button className="btn" onClick={updateData}>Update</button>):(<button className="btn" onClick={addData}>Add</button>)
            }
            
        </div>
        <ul className="listitems">
            {tasks.map((task)=>(
                <li key={task.index}>
                <div className="list">
                <p>{task.title}</p>
                <p>{task.description}</p>
                <button className="btn" onClick={()=>addUpdateData(task)}>Update</button>
                <button className="btn" onClick={()=>deleteData(task.index)}>Delete</button>
                </div>
                </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Task;
