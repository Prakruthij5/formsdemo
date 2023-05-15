import React,{useState,useEffect} from "react";

const employees=[
    {
        id:1005,
        name:'Amol',
        salary:7000,
        department:'.net'
    },
    
    {
        id:1009,
        name:'Daya',
        salary:1000,
        department:'Testing'

    },
    {
        id:1008,
        name:'Neelima',
        salary:81000,
        department:'Testing'

    },
    {
        id:1001,
        name:'Rahul',
        salary:9000,
        department:'Java'

    },
    {
        id:1007,
        name:'Rajita',
        salary:21000,
        department:'BI'

    },
    {
        id:1004,
        name:'Sachin',
        salary:11500,
        department:'ORAAPS'

    },
    {
        id:1003,
        name:'Uma',
        salary:12000,
        department:'Java'

    },
    {
        id:1002,
        name:'Vikash',
        salary:11000,
        department:'ORAAPS'

    },
    {
        id:1006,
        name:'Vishal',
        salary:17000,
        department:'BI'

    },
    

]
export default function SortDataAssgn(){

    const[data,setData]=useState([]);
    const[sortType,setSortType]=useState('id');

    useEffect(()=>{
        const sortArray=type =>{
            const types={
                id:'id',
                name:'name',
                salary:'salary',
                department:'department'
            };
            const sortProperty=types[type];
            const sorted=[...employees].sort((a,b)=>a[sortProperty]-b[sortProperty]);
            setData(sorted)

            employees.sort((a,b)=>(a.name>b.name)? 1 : -1)


        }
        sortArray(sortType);
    },[sortType]);

    return(
        <div className='App'>
            <select onChange={(e)=>setSortType(e.target.value)}>

                <option value="id">Id</option>
                <option value="name">Name</option>
                <option value="salary">Salary</option>
                <option value="department">Department</option>

            </select>

        {data.map(emp=>(<div key={emp.id} style={{margin:'30px'}}>
        
            <div>{`Id is ${emp.id}`}</div>
            <div>{`Name is ${emp.name}`}</div>
            <div>{`Salary is ${emp.salary}`}</div>
            <div>{`Department is ${emp.department}`}</div></div>
            ))}

        </div>
    )
    }