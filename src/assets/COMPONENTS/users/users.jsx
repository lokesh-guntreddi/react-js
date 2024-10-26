import { useEffect, useState } from "react";


export default function Users(){
    const [usersList,setusersList]=useState([]);
    const [pending,setpending]=useState(false);
    // useEffect(()=>{
    //     fetchResponse()
    // },[]) 
    // function HandleUsersList(){
    //     fetchResponse()
    // }
    
    async function fetchResponse(){
        try{
            setpending(true)
            const fetchapi = await fetch('https://dummyjson.com/users');
            const result = await  fetchapi.json();
            console.log(result);
            if(result?.users){
        setpending(false)
        setusersList(result?.users);
    }
    else {
        setpending(false)
        setusersList([]);
    }
        }
        catch(error){
            console.log(error);
        }
    }
    console.log(usersList);
    if(pending){
    return <h4>fectchig details ! please wait</h4>
    }
    
    return <div>
        <h2 style={{textAlign:'left',color:'yellowgreen'}}>Fetching data :</h2>
        <h1 className="fullpinkglow"> ALL USERS LIST</h1>
        <button className="gradient-button" onClick={fetchResponse} > FETCH USRS LIST </button>
         <ul>
           { usersList && usersList.length >0 ?
            usersList.map(userItem=>
                <li key={userItem?.id}>
                  <p className="fullgreenglow"> {userItem?.firstName} {userItem?.lastName}</p> 
                </li>) : null
           } 
        </ul>
    </div>
}