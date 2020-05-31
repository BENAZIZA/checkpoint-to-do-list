import React ,  { useState } from 'react'
import OtherTask from './OtherTask'
import Title from './Title'
import './Mystyle.css'
const TaskList = () =>{
	const [Tasks,setTasks]=useState([
            {do:'clean your room',id:1,editMode:false,name:''},
            {do:'do your homework',id:2,editMode:false,name:''}
		])
	const addTask =(newTask)=>{
		newTask.length >0 ?
		(setTasks([...Tasks,{do:newTask,id:new Date(),editMode:false ,name:''}])):
         (alert('you have to add a valid task'))
	}
	const removeTask=(id)=>
	{
		
		setTasks(Tasks.filter(othertask =>othertask.id !== id))
		console.log(id)

	}
	const changeTask =(id)=>(e)=>
	{
		//e.preventDefault()
		let item = Tasks.findIndex(item=>item.id===id)
		let newT=[...Tasks]
		newT[item].name=e.target.value
		//console.log(newT)
		setTasks(newT)
		
		//setTasks(e.target.value)
		//setTasks(Tasks[item]={do:Tasks[item].do,id:Tasks[item].id,editMode:Tasks[item].editMode ,name:Tasks[item].name})
		

        //Tasks.map(othertask=> othertask.id===id ? (setModifyTask(e.target.value)):(setModifyTask("")))
	}
	const changeEditMode =(id)=>
	{
		let item = Tasks.findIndex(item=>item.id===id)
		let changeEdit=[...Tasks]
		changeEdit[item].editMode= !changeEdit[item].editMode
		
		setTasks(changeEdit)	
	}
	const saveChangement = (id)=>
	{
		let item = Tasks.findIndex(item=>item.id===id)
		let changeSave=[...Tasks]
		if (changeSave[item].name.length >0) {
		changeSave[item].do= changeSave[item].name
		changeSave[item].editMode= !changeSave[item].editMode
		changeSave[item].name=""
		setTasks(changeSave)
	        }
	      else
	      {
	       changeSave[item].editMode= !changeSave[item].editMode
	      	alert("you have to make changement")
	      	setTasks(changeSave)
	      }
		console.log(changeSave)


	}
	
		return(
			<div>
			<div className="styleTitle">
			<Title NbTask={Tasks}  />
			</div>
			<ul>
             {
			Tasks.map( task =>{
				return(
			(<React.Fragment key ={task.id} >
			{task.editMode===false ?
			(<React.Fragment><li className="row taskrow"><span className="col-8 styleTask">{task.do}</span>
			<button onClick={()=>removeTask(task.id)}  className = "btn-delete taskbtn "><i className="fas fa-trash-alt"></i></button>
			<button onClick={()=>changeEditMode(task.id)} className = "btn-edit taskbtn "><i className="fas fa-pen"></i></button></li><div className="seperator"> </div></React.Fragment>):
			(<React.Fragment><input className="styleInput"type ="text"  id= {task.id} value = {task.name} onChange={changeTask(task.id)} />
             <button className="styleSubmit" onClick={()=>saveChangement(task.id)}> save </button>
			</React.Fragment>)
			}
			</React.Fragment>)		    
			)
		     })
		     }
		    </ul>
		    <OtherTask addTask={addTask}/>
		    </div>

		)
        }
        export default TaskList;