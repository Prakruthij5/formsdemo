import React,{useState,useEffect} from "react";

const emps=[
    {
        id:1,
        name:'Rahul',
        salary:45000
    },
    
    {
        id:2,
        name:'Simran',
        salary:46000

    },
    {
        id:3,
        name:'Sam',
        salary:44000

    },
    {
        id:4,
        name:'tina',
        salary:47000

    },
    
    

]
export default function SortData(){

    const[data,setData]=useState([]);
    const[sortType,setSortType]=useState('id');

    useEffect(()=>{
        const sortArray=type =>{
            const types={
                id:'id',
                name:'name',
                salary:'salary'
            };
            const sortProperty=types[type];
            const sorted=[...emps].sort((a,b)=>a[sortProperty]-b[sortProperty]);
            setData(sorted)

            emps.sort((a,b)=>(a.name>b.name)? 1 : -1)


        }
        sortArray(sortType);
    },[sortType]);

    return(
        <div className='App'>
            <select onChange={(e)=>setSortType(e.target.value)}>

                <option value="id">Id</option>
                <option value="name">Name</option>
                <option value="salary">Salary</option>

            </select>

        {data.map(emp=>(<div key={emp.id} style={{margin:'30px'}}>
        
            <div>{`Id is ${emp.id}`}</div>
            <div>{`Name is ${emp.name}`}</div>
            <div>{`Salary is ${emp.salary}`}</div></div>
            ))}

        </div>
    )
    }