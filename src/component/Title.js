import React from 'react'
import './Mystyle.css'

 const Title = ({NbTask})=>{
 	return(NbTask.length >1? (<h1>you have {NbTask.length} tasks to do</h1>):(<h1>you have {NbTask.length} task to do</h1>))
             }
export default Title;
