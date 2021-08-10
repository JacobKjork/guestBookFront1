import React,{useEffect,useState} from 'react';

function Pagination({ totCount, pageSize, paginationData, setPaginationData }) {
    const [countChanged, setCountChanged] = useState(totCount)
    useEffect(() => {
        setPaginationData(...paginationData,{startSlice: 0, stopSlice: pageSize })
        let allVisit = document.getElementsByClassName("visit")
        Object.values(allVisit).forEach(element => {
            element.className = "notvisit"
        });
    
   
    },[totCount]);

    const totChunck = Math.ceil(totCount / pageSize)
    let selectedPage;

    function newPage(e){
        let allVisit = document.getElementsByClassName("visit")
        Object.values(allVisit).forEach(element => {
            element.className = "notvisit"
        });
        let page = e.target.innerHTML
        setPaginationData(...paginationData,{startSlice: page*pageSize, stopSlice: pageSize * 1 + page*pageSize })
        e.target.className = 'visit';
        selectedPage = e.target;

    }

    function showPagination() {
        var rows = [];
        for (var i = 0; i < totChunck; i++) {
            
            rows.push(<li 
                style={{display: 'inline-block', 'margin-left': 15}}
                onClick={(e)=>newPage(e)}
                >{i}
                </li>);
        }
        return rows;
    }
    return (

        <div class="pagination"  style={{display: 'inline', 'width': '100%'}}>
            <ul style={{display: 'inline', 'list-style-type': 'none', 'width': '100%'}}> {showPagination().map(i=>i)}</ul>
            <span> &nbsp; &nbsp; &nbsp;  </span>


            <p style={{display: 'inline-block', 'list-style-type': 'none'}}>visar :&nbsp; {paginationData.startSlice}&nbsp; </p>
            <p style={{display: 'inline-block', 'list-style-type': 'none'}}>-&nbsp; {paginationData.stopSlice}&nbsp; </p>
            <p style={{display: 'inline-block', 'list-style-type': 'none'}}>av :&nbsp; {totCount}</p>
        </div>
    );
} export default Pagination;