import { useState } from 'react';
import './App.css';
import AddEmp from './components/Employee';
import EmployeeList from './components/EmployeeList';
import Registration from './components/Registration';
import TaskForm from './components/TaskForm';
import TaskListDisplay from './components/TaskListDisplay';
import C1 from './components/C1';
import UnControlledComponent from './components/UnControlledComponent';
import Greeting from './components/Greeting';
import SortData from './components/SortData';
import SortDataAssgn from './components/SortDataAssgn';
import SortTable from './components/SortTable';

function App(){
  const[taskLogs,setTaskLogs]=useState([]);

  const addTaskLog=(task)=>{
    let tasks=[...taskLogs,task];
    setTaskLogs(tasks);


  }
  const[EmployeeDetails,setEmployeeDetails]=useState([]);

  const addEmpLog=(emp)=>{
    let Employee=[...EmployeeDetails,emp];
    setEmployeeDetails(Employee);


  }

  return(<div>
    <SortData/>
    <SortDataAssgn/>
    <SortTable/>
    <Greeting/> name="tina" time="afternoon"
    <AddEmp addEmpLog={addEmpLog}/>
    <EmployeeList Employee={EmployeeDetails}/>
    <Registration/>
    <TaskForm addTaskLog={addTaskLog}/>
    <TaskListDisplay tasks={taskLogs}/>
    <C1/>
    <UnControlledComponent/>
    </div>
  )
}
export default App;