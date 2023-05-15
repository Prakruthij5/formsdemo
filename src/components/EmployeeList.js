export default function EmployeeList(props){

    return(
        <table border="5">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Department</th>
                </tr>
            </thead>
            {props.Employee.map((element,index)=>{
                return <tr>
                    <th>{element[0]},{index}</th>
                    <th>{element[1]},{index}</th>
                    <th>{element[2]},{index}</th>
                    <th>{element[3]},{index}</th>
                </tr>
            })}
        </table>

    )
}