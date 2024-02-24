// import logo from "./logo.svg";
// import "./App.css";
// import { InitialTask } from "./Data.js";
// import React, { useState,useEffect } from "react";
// import { Card, Form, Button } from "react-bootstrap";
// import TaskList from "./TaskList/TaskList";

// // import { Card } from 'react-bootstrap'                              is called named import

// const App = () => {
//   const [tasks, setTasks] = useState(InitialTask);
//   const [filteredTasks, setFilteredTasks] = useState();
//   const[filterState,setFilterState] = useState("All")
//   const[incomplete,setInComplete] = useState("Incomplete")
//   const[complete,setComplete] = useState("Complete")
//   const filterfunction = (e) => {
//     if (e.target.value !== "All") {
//       let filtered = tasks.filter((task) => task.status == e.target.value);
//       setFilteredTasks(filtered);
//     } else {
//       setFilteredTasks(tasks);
//     }
//   };
//   const addTask = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     let newData = [];
//     for (let [key, value] of formData) {
//       console.log(key, value);
//       newData[key] = value;

//     }
//     console.log(newData);
//     setTasks((prev) => {
//       let id = prev[prev.length - 1].id;
//       newData.id = id + 1;
//       return [newData, ...prev];
//     });
//   };

//  const onChangeStatus=(e,id) =>{

//   setTasks((prev)=>{

//     let changed  = prev.filter((tasks) => tasks.id ===id)
//     let index = prev.indexOf(changed)
//     changed[0].status=e.target.checked? "complete":"incomplete"
//     prev.splice(index,1,changed)
//     return [...prev]

//   })
//  }

//  useEffect(()=>
//  {
//   setComplete(tasks.filter((task)=>task.status=="complete").length)
//   setInComplete(tasks.filter((task)=>task.status=="incomplete").length)

//  })

//   return (
//     <Card>
//       <Card.Title>
//         <Form onSubmit={addTask}>
//           <Form.Label>Title</Form.Label>
//           <Form.Control type="text" name="title"></Form.Control>
//           <Form.Label>Status</Form.Label>
//           <Form.Control
//             type="text"
//             name="status"
//             placeholder="complete or incomplete"
//           ></Form.Control>
//           <Button type="submit">Add</Button>
//         </Form>

//         <p>Complete: </p>
//         <p>Incomplete: </p>
//         <select onChange={(e) => filterfunction(e)}>
//           <option value={"All"}>All</option>
//           <option value={"complete"}>complete</option>
//           <option value={"incomplete"}>Incomplete</option>
//         </select>
//       </Card.Title>

//       <Card.Body>
//       {filteredTasks?<TaskList tasks={filteredTasks} onchangeStatus={onChangeStatus}/>:<TaskList tasks={tasks} onchangeStatus={onChangeStatus}/> }

//     </Card.Body>
//       {/* <Card.Body>
//         {filteredTasks ? (
//           <TaskList tasks={filteredTasks} onChangeStatus = {onChangeStatus} />
//         ) : (
//           <TaskList tasks={tasks}  onChangeStatus = {onChangeStatus}  />
//         )}
//       </Card.Body> */}
//     </Card>
//   );
// };

// export default App;

// ------------------------------------------------------------------------

// import logo from "./logo.svg";
// import "./App.css";
// import { InitialTask } from "./Data.js";
// import React, { useState, useEffect } from "react";
// import { Card, Form, Button } from "react-bootstrap";
// import TaskList from "./TaskList/TaskList";

// const App = () => {
//   const [tasks, setTasks] = useState(InitialTask);
//   const [filteredTasks, setFilteredTasks] = useState();
//   const [filterState, setFilterState] = useState("All");
//   const [incomplete, setInComplete] = useState("Incomplete");
//   const [complete, setComplete] = useState("Complete");
//   const [alertMsg, setAlertMsg] = useState("");

//   useEffect(() => {
//     setComplete(tasks.filter((task) => task.status === "complete").length);
//     setInComplete(tasks.filter((task) => task.status === "incomplete").length);

//     // Check for invalid status values and set alert message
//     const invalidStatus = tasks.some((task) => task.status !== "complete" && task.status !== "incomplete");
//     if (invalidStatus) {
//       setAlertMsg("Some tasks have invalid status values. Status must be either 'complete' or 'incomplete'");
//     } else {
//       setAlertMsg("");
//     }
//   }, [tasks]);

//   const filterfunction = (e) => {
//     if (e.target.value !== "All") {
//       let filtered = tasks.filter((task) => task.status === e.target.value);
//       setFilteredTasks(filtered);
//     } else {
//       setFilteredTasks(tasks);
//     }
//   };

//   const addTask = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     let newData = {};
//     for (let [key, value] of formData) {
//       newData[key] = value;
//     }
//     setTasks((prev) => {
//       let id = prev[prev.length - 1].id;
//       newData.id = id + 1;
//       return [newData, ...prev];
//     });
//   };

//   const onChangeStatus = (e, id) => {
//     setTasks((prev) => {
//       let changed = prev.map((task) =>
//         task.id === id ? { ...task, status: e.target.checked ? "complete" : "incomplete" } : task
//       );
//       return changed;
//     });
//   };

//   return (
//     <Card>
//       <Card.Title>
//         <Form onSubmit={addTask}>
//           <Form.Label>Title</Form.Label>
//           <Form.Control type="text" name="title" />
//           <Form.Label>Status</Form.Label>
//           <Form.Control type="text" name="status" placeholder="complete or incomplete" />
//           <Button type="submit">Add</Button>
//         </Form>

//         <p>Complete: {complete}</p>
//         <p>Incomplete: {incomplete}</p>
//         <select onChange={(e) => filterfunction(e)}>
//           <option value={"All"}>All</option>
//           <option value={"complete"}>complete</option>
//           <option value={"incomplete"}>Incomplete</option>
//         </select>
//         {alertMsg && <p style={{ color: "red" }}>{alertMsg}</p>}
//       </Card.Title>

//       <Card.Body>
//         {filteredTasks ? (
//           <TaskList tasks={filteredTasks} onchangeStatus={onChangeStatus} />
//         ) : (
//           <TaskList tasks={tasks} onchangeStatus={onChangeStatus} />
//         )}
//       </Card.Body>
//     </Card>
//   );
// };

// export default App;

import logo from "./logo.svg";
import "./App.css";
import { InitialTask } from "./Data.js";
import React, { useState, useEffect } from "react";
import { Card, Form, Button, CardFooter, Pagination } from "react-bootstrap";
import TaskList from "./TaskList/TaskList";
import axios, { AxiosError } from "axios";
import { Spinner } from "react-bootstrap";

const App = () => {
  const limit = 10;
  const [offset, setOffset] = useState(limit);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState();
  const [filterState, setFilterState] = useState("All");
  const [incomplete, setInComplete] = useState("Incomplete");
  const [complete, setComplete] = useState("Complete");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const fetchTask = async (offset) => {
    return await axios
      .get(
        `https://70107467-676e-4c68-832d-73734f911d74.mock.pstmn.io/mock?offset=${offset}`
      )
      .then((res) => res.data)
      .catch((err) => err);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError();
        setIsError(false);
        let response = await fetchTask(offset);
        if (response instanceof AxiosError) {
          throw response;
        } else {
          setTasks(response);
        }
        console.log(response);
      } catch (response) {
        setIsError(true);
        setError(response.toString());
      } finally {
        setIsLoading(false);
      }
    })();
  }, [offset]);

  useEffect(() => {
    if (tasks.length) {
      setComplete(tasks.filter((task) => task.status === "Complete").length);
      setInComplete(
        tasks.filter((task) => task.status === "Incomplete").length
      );
    }
    // Alert if status is neither 'complete' nor 'incomplete'
    // if (
    //   tasks.length &&
    //   tasks.some(
    //     (task) => task.status !== "complete" && task.status !== "incomplete"
    //   )
    // ) {
    //   alert("Status of all tasks must be either 'complete' or 'incomplete'");
    // }
  }, [tasks]);

  const filterfunction = (e) => {
    if (e.target.value !== "All") {
      let filtered = tasks.filter((task) => task.status === e.target.value);
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  };

  const addTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let newData = {};
    for (let [key, value] of formData) {
      newData[key] = value;
    }
    if (newData.status !== "Complete" && newData.status !== "Incomplete") {
      alert("Status must be either 'complete' or 'incomplete'");
      return;
    } else
      setTasks((prev) => {
        let id = prev[prev.length - 1].id;
        newData.id = id + 1;
        return [newData, ...prev];
      });
  };

  const onChangeStatus = (e, id) => {
    setTasks((prev) => {
      let changed = prev.map((task) =>
        task.id === id
          ? { ...task, status: e.target.checked ? "Complete" : "Incomplete" }
          : task
      );
      return changed;
    });
  };

  return (
    <Card>
      <Card.Title>
        <Form onSubmit={addTask}>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" />
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            name="status"
            placeholder="Complete or Incomplete"
          />
          <Button type="submit">Add</Button>
        </Form>

        <p>Complete: {complete}</p>
        <p>Incomplete: {incomplete}</p>
        <select onChange={(e) => filterfunction(e)}>
          <option value={"All"}>All</option>
          <option value={"Complete"}>complete</option>
          <option value={"Incomplete"}>Incomplete</option>
        </select>
      </Card.Title>

      <Card.Body>
        {isLoading ? (
          <Spinner></Spinner>
        ) : isError ? (
          <>{error}</>
        ) : filteredTasks ? (
          <TaskList tasks={filteredTasks} onChangeStatus={onChangeStatus} />
        ) : (
          tasks && <TaskList tasks={tasks} onChangeStatus={onChangeStatus} />
        )}
      </Card.Body>
      <Card.Footer>
        <Pagination>
          <Pagination.Prev
            onClick={() => setOffset((prev) => prev - limit)}
            disabled={offset === limit ? true : false}
          ></Pagination.Prev>
          <Pagination.Item active>{offset}</Pagination.Item>
          <Pagination.Next
            onClick={() => setOffset((prev) => prev + limit)}
            disabled={offset == 50 ? true : false}
          ></Pagination.Next>
        </Pagination>
      </Card.Footer>
    </Card>
  );
};

export default App;
