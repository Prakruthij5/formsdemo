import { useState } from "react";

export default function AddEmp({addEmpLog}){

    const[id,setId]=useState();
    const[name,setName]=useState();
    const[salary,setSalary]=useState();
    const[department,setDepartment]=useState();

    const handleSubmit=(e)=>{
        addEmpLog([id,name,salary,department]);
    
        console.log('form submitted'+id+''+name+''+salary+''+department);
        e.preventDefault();
    
    
    }
    return(
        <form onSubmit={e=>{handleSubmit(e)}}>
            <label>Employee Id</label>
            <br/>
            <input name='id'
            type='text'
            onChange={e=>setId(e.target.value)}
            value={id}
            />
            <br/>

        <label>Name</label>
        <br/>
        <input name='UserName'
        type='text'
        onChange={e=>setName(e.target.value)}
        value={name}

        />
        <br/>

        <label>Salary</label>
        <br/>
        <input name='UserSalary'
        type='text'
        onChange={e=>setSalary(e.target.value)}
        value={salary}

        />
        <br/>

        <label>Department</label>
        <br/>
        <input name='UserDepartment'
        type='text'
        onChange={e=>setDepartment(e.target.value)}
        value={department}

        />
        <br/>
        <input type='submit' value='Add Employee' ></input>


</form>
)
}
