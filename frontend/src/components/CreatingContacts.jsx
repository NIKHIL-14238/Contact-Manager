import {useState} from 'react';
export default function CreatingContacts(){
    const [name,setName] = useState("");
    const [num,setNum] = useState("");
return (
    <>
        <div className="form-container">
        <input  className="input-box" placeholder="name" type="string" onChange={(e)=>{
            setName(e.target.value)
        }}></input>
        <br></br>
        <input className="input-box" placeholder="phone no." type="number" onChange={(e)=>{
            setNum(e.target.value)}} ></input>
            <br></br>
        <button className="submit-btn"onClick={()=>{
            fetch("http://localhost:3000/posting",{
                method : "POST",
                body : JSON.stringify({
                    person_name:name,
                    person_number:num
                }),
                headers : {"Content-Type":"application/json"}
                }) .then(async function (res){
                const json = await res.json();
                console.log(json);
                alert("todo added");
            })
                
            }} >Add Contact</button>
        </div>    
    </>
)
}
