import React , {useState} from 'react'
function CreateUser(){


    const [name,setName]= useState("");
    const [age,setage]= useState("");
    function makeUser(){

        console.warn("called")
    }

    return(
        <div>
        <h1>Make a user</h1>
        <input type="text" name="username" value={name}></input>
        <br/><br/>
        <input type="text" name="age" value={age}></input>
        <br/><br/>
        <button  onClick ={makeUser}>Create</button>
        </div>
    )
}

export default CreateUser;