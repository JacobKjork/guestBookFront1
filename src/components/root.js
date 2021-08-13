import React ,{useState,useMemo}from 'react';
import Posts from './posts';
import InputPost from './inputPost'
import manageData from '../hooks/dataManagementHook';

function Root() {
    
    const [relodeData,dataReloder] = useState(0);
    const{data,reqStatus,error,updateData} = manageData(0,[])
    let ini = true;
    const doInit  = useMemo(() => {return init()});
    function onInputSubmitClick(namn,email,meddelande,userId) {

        


        const axios = require('axios')

        axios
            .post('http://localhost:4000/api/v1/setPost', {
                posterName: namn,
                posterEmail: email,
                postBody: meddelande,
                postPostedBy: userId
            })
            .then(res => {
                console.log(`statusCode: ${res.status}`)
                console.log(res)
                updateData();
            })
            .catch(error => {
                console.error(error)
            })
        
    }
function init(){
    if (ini){
    //updateData();
    
    ini = false
   // alert("init");
}
}

    return(
    <div>
        
        <h1>
            Detta är min gästbok!
        </h1>
        <InputPost onInputSubmitClick={onInputSubmitClick}/>
        <Posts postsheader = "Posts" reload={data}  />
    </div>
);}

export default Root;