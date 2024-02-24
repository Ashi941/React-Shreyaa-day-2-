import React, {useState} from 'react'
import { Card, Form } from 'react-bootstrap'
import styles from './Task.module.css'
 
const Tasks = ({task,onChangeStatus}) => {


    const[isChecked,setIsChecked] = useState(task.status === "Complete"?true:false)
  return (
    <Card className = {styles.tasks}>
 
        <Form.Check label={task.title}
        checked={task.status === "Complete"?true:false}
        value = {task.id}
        onChange={(e)=>{onChangeStatus(e,task.id); setIsChecked((prev)=>!prev)}}>
        </Form.Check>
    </Card>
  )
}
 
export default Tasks
