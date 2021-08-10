import { useState,useEffect } from "react";

export const REQ_STATE = {
    LOADIN:"loading",
    SUCCESS:"succes",
    FAIL:"failure",
}

function manageData(delayTime = 1000, initialData=[]){
    const[data, setData]=useState(()=>{updateData()});
    const[reqStatus, setReqStatus]=useState(REQ_STATE.LOADIN);
    const[error, setError]=useState("");
    


    
    function updateData(){
        
            //const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
            const apiUrl = `http://localhost:4000/api/v1/posts`;
            fetch(apiUrl)
            .then(response => response.json())
              .then(post => setData({post})             
                  )
          
        console.log(data);
    }
    return{
        data,
        reqStatus,
        error,
        updateData,
      
    };
}
export default manageData;