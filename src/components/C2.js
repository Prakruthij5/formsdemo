import Data from "./Data";
import './C2.css';

export default function C2(props){
    return(<div className="C2">
        <h1>List of data from c1</h1>
        {props.list.map((element,index)=>(
            <Data element={element} index={index}/>
        ))}
    </div>)
}