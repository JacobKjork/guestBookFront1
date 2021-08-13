import { useState,useEffect } from "react";



function userData(initialData=[]){
    const[userData, setUserData]=useState(()=>{updateUserData()});
    const[error, setError]=useState("");
    


    
    function updateUserData(){
        
            //const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
            const apiUrl = `http://localhost:4000/api/v1/users`;
            fetch(apiUrl)
            .then(response => response.json())
              .then(users => setUserData({users})             
                  )
          
        console.log(userData);
    }
    return{
        userData,
        error,
        updateUserData,
      
    };
}
export default userData;