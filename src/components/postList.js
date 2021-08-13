import React, {useState,useEffect, useContext} from 'react';
import Item from './listItem'
import MainProvider, { MainContext } from '../contex/manicontext';
import Pagination from './pagination';

export const SORT_STATE = {
  MESSAGE:"message",
  NAME:"name",
  MAIL:"mail",
  ID:"id",
  POSTEDBY:"posted by",
  FILTER_ON_NAME:"filter name",
  FILTER_ON_MAIL:"filter mail",
  DEFAULT:"default",
}

function List  (props)  {
  
  const {posts}  = props.lista;
  const [paginationData, setPaginationData]=useState({startSlice:0,stopSlice:5})
  const {namn, setNamn,searchQuery} = useContext(MainContext);
  const [sortOrder,doSort]=useState({SORT_STATE: SORT_STATE.DEFAULT,upp: true})
  const [filterName,doFilter]=useState('');
  const [filterMail,doFilterMail]=useState('');
  useEffect(() => {
    
   
  }, []);
  
  if (!posts || posts.length === 0) return <p>No posts, sorry</p>;
  props.lista.posts.forEach(function(b) {!(b.postPostedBy === undefined) ? b.postPostedBy : (b.postPostedBy = 0)} )
  let listItems = Object.values(props.lista.posts).map((post) =>
    
    <Item key={post.postId} postItem={post} sortOrder={sortOrder} doSort={doSort} filterName={filterName} doFilterMail={doFilterMail} filterMail={filterMail} doFilter={doFilter}/>
  );
  
function direction(){
  if (sortOrder.upp == 1) {
    return 1;
  }else{
    return -1;
  }
}
function sortOnMessage(items){
    doSort({...sortOrder,SORT_STATE:SORT_STATE.MESSAGE, upp:!sortOrder.upp});  
}
function sortOnName(items){
  doSort({...sortOrder,SORT_STATE:SORT_STATE.NAME, upp:!sortOrder.upp});  
}
function sortOnMail(items){
  doSort({...sortOrder,SORT_STATE:SORT_STATE.MAIL, upp:!sortOrder.upp});   
}
function sortOnId(items){
  doSort({...sortOrder,SORT_STATE:SORT_STATE.ID, upp:!sortOrder.upp});     
}
function sortOnPostedBy(items){
  doSort({...sortOrder,SORT_STATE:SORT_STATE.POSTEDBY, upp:!sortOrder.upp});     
}
function filterOnName(e,items){
  alert("filter")
  doSort({...items,SORT_STATE:SORT_STATE.filterOnName, upp:!sortOrder.upp});     
}
function filterOnName(e,items){
  alert("filter")
  doSort({...items,SORT_STATE:SORT_STATE.filterOnName, upp:!sortOrder.upp});     
}
//listItems = listItems.sort(function(a,b){return b.props.postItem.postId - a.props.postItem.postId});

if(searchQuery.length>=0){
  listItems = listItems.filter(function(i){
    return(
            i.props.postItem.posterName.toUpperCase().includes(searchQuery.toUpperCase())||
            i.props.postItem.posterEmail.toUpperCase().includes(searchQuery.toUpperCase())

    );
  })
}

switch(sortOrder.SORT_STATE) {
  case SORT_STATE.MESSAGE:
    listItems = listItems.sort(function(a,b){
      var nameA = a.props.postItem.postBody.toUpperCase(); // ignore upper and lowercase
      var nameB = b.props.postItem.postBody.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1 * direction();
      }
      if (nameA > nameB) {
        return 1*direction();
      }
    
      // names must be equal
      return 0;
    });
    break;
   case SORT_STATE.NAME:
      listItems = listItems.sort(function(a,b)//return b.props.postItem.posterName - a.props.postItem.posterName});
        {
          var nameA = a.props.postItem.posterName.toUpperCase(); // ignore upper and lowercase
          var nameB = b.props.postItem.posterName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1*direction();
          }
          if (nameA > nameB) {
            return 1*direction();
          }
        
          // names must be equal
          return 0;
        });
      break;
      case SORT_STATE.MAIL:
    listItems = listItems.sort(function(a,b)//{return b.props.postItem.posterEmail - a.props.postItem.posterEmail});
      {
        var nameA = a.props.postItem.posterEmail.toUpperCase(); // ignore upper and lowercase
        var nameB = b.props.postItem.posterEmail.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1*direction();
        }
        if (nameA > nameB) {
          return 1*direction();
        }
      
        // names must be equal
        return 0;
      });
    break;
    case SORT_STATE.ID:
    listItems = listItems.sort(function(a,b){return b.props.postItem.postId - a.props.postItem.postId *direction()});
    break;
    case SORT_STATE.POSTEDBY:
      listItems = listItems.sort(function(a,b){return b.props.postItem.postPostedBy - a.props.postItem.postPostedBy *direction()});
      break;
  case SORT_STATE.FILTER_ON_NAME:
    let str1 = filterName
    listItems = listItems.filter(a => a.props.postItem.posterName == str1);
    break;
    case SORT_STATE.FILTER_ON_MAIL:
    let str2 = filterMail
    listItems = listItems.filter(a => a.props.postItem.posterEmail == str2);
    break;
  default:
    // code block
}

  
  return (
    <div>
    <h1>{namn}</h1>
    <h1>{searchQuery}</h1>
    <table>
      
      
        <tbody>
          <tr  onMouseOver={(e)=>{(e.target.className  = 'visit');}} onMouseOut={(e)=>{(e.target.className  = 'notvisit');}}>
            <th width="60%" onClick={sortOnMessage}>Meddelande</th>
            <th width="10%" onClick={sortOnName}>Namn</th>
            <th width="24%" onClick={sortOnMail}>mail</th>
            <th width="3%"  onClick={sortOnId}>id</th>
            <th width="3%"  onClick={sortOnPostedBy}>id</th>
            </tr>
      {listItems.slice(paginationData.startSlice,paginationData.stopSlice)}
     
      <tr>
      <td>
      <Pagination pageSize="5" totCount={listItems.length} paginationData={paginationData} setPaginationData={setPaginationData}/> 
      </td><td></td><td></td><td></td><td></td></tr>
      
      
      </tbody>
    </table>
    </div>
  );
};
export default List;
