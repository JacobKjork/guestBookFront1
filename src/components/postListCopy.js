import React, {useState,useEffect} from 'react';
import Item from './listItem'

function List  (props)  {
    
  const posts  = props.lista;
  
  if (!posts || posts.length === 0) return <p>No posts, sorry</p>;
 
  let listItems = posts.map((post) =>
    
    <div key={post} postItem={post} >Hej {post}</div>
  );
 const [sort,doSort]=useState(0)
  useEffect(() => {
    listItems = listItems.sort(function(a,b){return b.key - a.key});
    alert("effect")
  }, [sortOnName]);
function sortOnName(items){
    alert("sort")
    listItems = listItems.sort(function(a,b){return b.key - a.key});
    doSort(sort +1);
}
if (sort > 2){
listItems = listItems.sort(function(a,b){return b.key - a.key});
}
  const filterdItems = listItems.filter(a => a.props.postItem.posterName == 'Kalle Anka');
  return (
    <table>
        <tbody><tr  onMouseOver={(e)=>{(e.target.className  = 'visit');}} onMouseOut={(e)=>{(e.target.className  = 'notvisit');}}>
            <th width="60%">Meddelande</th>
            <th width="10%" onClick={() => {sortOnName({listItems})}} >Namn</th>
            <th width="25%">mail</th>
            <th width="5%">id</th>
            </tr>
      {listItems}
      </tbody>
    </table>
  );
};
export default List;
