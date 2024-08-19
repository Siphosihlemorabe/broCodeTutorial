
import React,{useState} from "react";
function UseState(){
  const [name,setName]=useState("");
 function handleNameChange(event){
  setName(event.target.value);
 } 
return(<>
<input value={name} onChange={handleNameChange} type="text"  />
<p>name{name}</p>
</>)
}
export default UseState