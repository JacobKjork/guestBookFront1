import React from 'react';
import { SORT_STATE } from './postList';
function Item(props)  {

    const doSort = props.doSort;
    const sortOrder = props.sortOrder;
    const postItem = props.postItem;
    const doFilter = props.doFilter;
    const filterName = props.filterName
    const doFilterMail = props.doFilterMail;
    const filterMail = props.filterMail
    
      function onClickRespond(e){
        let str = e.target.innerText;
        doFilter(str);
        doSort({...sortOrder,SORT_STATE:SORT_STATE.FILTER_ON_NAME});   
      }
      function onClickRespondMail(e){
        let str = e.target.innerText;
        doFilterMail(str);
        doSort({...sortOrder,SORT_STATE:SORT_STATE.FILTER_ON_MAIL});   
      }
      function changeBackgroundBacks(e) {
        e.target.className = 'notvisit';
      }
      
        return (
                <tr  onMouseOver={(e)=>{(e.target.className  = 'visit');}} onMouseOut={changeBackgroundBacks}>
                        <td width="60%" className='list' >{postItem.postBody}</td>
                        <td width="10%" className='post-text' onClick={onClickRespond}>{postItem.posterName} </td>
                        <td width="25%" className='post-description' onClick={onClickRespondMail}>{postItem.posterEmail}</td>
                        <td width="5%" className='post-id' >{postItem.postId}</td>
                        

                </tr>
        );

};
export default Item;
