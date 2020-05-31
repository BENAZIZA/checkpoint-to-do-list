import React ,  { useState } from 'react'
import './Mystyle.css'
const OtherTask = ({addTask}) =>{
	const [Task,setTask]=useState('')
	const addOtherTask =(e)=>
	{
		setTask(e.target.value)
	}
	const submitTask =(e)=>
	{
		e.preventDefault()
		addTask(Task)
		setTask('')
	}

	return(
		<div className="styleAddTask">
		<input className="styleInput"type="text" placeholder="An other task" value={Task} onChange={addOtherTask} />
		<button className="styleSubmit"type="submit" onClick={submitTask}>submit</button>
		</div>

		)

}
export default OtherTask;