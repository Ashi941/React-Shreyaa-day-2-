 
import React from "react";
import { Card } from "react-bootstrap";
import Task from "../Task/Task";
import styles from './TaskList.module.css'
 
// ({taks}) is called destructuring
const TaskList = ({ tasks , onChangeStatus}) => {
  return (
    <Card className={styles.task}>
      {tasks.map((task) => {
        return <Task task={task} onChangeStatus={onChangeStatus}/>
})}
    </Card>
  );
};
 
export default TaskList;
 