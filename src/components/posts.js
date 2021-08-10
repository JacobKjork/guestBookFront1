import React, {useEffect,useState}from 'react';
import List from "./postList"
import ListCopy from "./postListCopy"




function Posts (props) {
    //const posts = props.reload.posts
    const [appState, setAppState] = useState({
        loading: false,
        posts: null,
      });
      let myHeaders = new Headers();
       myHeaders.append('Content-Type', 'application/json');
      const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
      };
      
    // useEffect(() => {
    //     setAppState({ loading: true });
    //     //const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    //     const apiUrl = `http://localhost:4000/api/v1/posts`;
    //     fetch(apiUrl, myInit)
    //       .then((res) => res.json())
    //       .then((posts) => {
    //         setAppState({ loading: false, posts: posts });
            
    //       });
    //   }, [setAppState]);
      let list;
      let listCopy;
      if(props.reload ){
          if(!props.reload.post){}else{
            
            list = <List lista ={props.reload.post}/>
            listCopy = <ListCopy lista ={[1,2,3,4,5]}/>
        
    }
      }
//
return(
    
    <div key="postId">
        <h1>{props.postsheader}</h1>
        {
        list
        }
        {
        //listCopy
        }
    </div>
);}

export default Posts;